import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const port = 5007;
app.use(cors())

app.get('/repos', async (req, res) => {
    const username = req.headers['github-username'];
    if (username) {
        try {
            const endpoint = `https://api.github.com/users/${username}/repos`;
            const response = await axios.get(endpoint);
            if (response.status === 200) {
                const repoNames = response.data.map(repo => repo.name);
                res.json(repoNames.slice(0, 15));
            } else {
                res.json([]);
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(400).json({ error: 'GitHub-Username header is missing' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
