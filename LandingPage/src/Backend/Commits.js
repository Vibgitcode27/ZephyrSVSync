import express from 'express';
import mongoose from 'mongoose';
import { Octokit } from '@octokit/core';
import axios from 'axios';

const app = express();
const port = 5000;

app.use(express.json());

const LeaderBoardSchema = new mongoose.Schema({
    Name: String,
    Commits: Number,
});

const Lead = mongoose.model('Lead', LeaderBoardSchema);

mongoose.connect('mongodb+srv://ShashwatPS:1@cluster0.1alkv6j.mongodb.net/LeaderBoard', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const fetchGitHubRepos = async (authtoken, githubusername) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${githubusername}/repos`, {
            headers: {
                Authorization: `Bearer ${authtoken}`,
            },
        });

        return response.data.map(repo => ({
            name: repo.name,
            owner: repo.owner.login,
        }));
    } catch (error) {
        console.error('Error fetching GitHub repositories:', error.message);
        throw error;
    }
};

const getCommitActivity = async (authtoken, owner, repo) => {
    const octokit = new Octokit({
        auth: authtoken,
    });

    try {
        const response = await octokit.request('GET /repos/{owner}/{repo}/stats/commit_activity', {
            owner,
            repo,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
            },
        });

        let sum = 0;
        for (let i = 0; i < response.data.length; i++) {
            sum += response.data[i].total;
        }
        return sum;
    } catch (error) {
        console.error(`Error fetching commit activity for ${owner}/${repo}:`, error.message);
        return 0;
    }
};

app.get('/api/github-commit-activity', async (req, res) => {
    const { authtoken, githubusername } = req.headers;
    console.log('Headers:', req.headers);
    if (!authtoken || !githubusername) {
        return res.status(400).json({ error: 'Authentication token and GitHub username are required in headers.' });
    }

    try {
        const existingUser = await Lead.findOne({ Name: githubusername });

        if (existingUser) {
            let totalSum = 0;

            for (const repo of existingUser.Repos) {
                const sum = await getCommitActivity(authtoken, repo.owner, repo.name);
                totalSum += sum;
            }

            existingUser.Commits = totalSum;
            await existingUser.save();

            return res.json({ totalCommits: totalSum, message: 'Commits updated for existing user.' });
        }
        const repos = await fetchGitHubRepos(authtoken, githubusername);

        let totalSum = 0;

        for (const repo of repos) {
            const sum = await getCommitActivity(authtoken, repo.owner, repo.name);
            totalSum += sum;
        }
        const newUser = new Lead({
            Name: githubusername,
            Commits: totalSum,
            Repos: repos,
        });

        await newUser.save();

        res.json({ totalCommits: totalSum, message: 'New user created with commits.' });
    } catch (error) {
        console.error('An error occurred:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
