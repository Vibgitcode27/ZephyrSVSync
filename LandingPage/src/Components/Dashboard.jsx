import {AppBar, Box, Button, IconButton, Typography, useTheme, Toolbar} from "@mui/material";
import { tokens } from "../theme";
import {useNavigate} from "react-router-dom"
// import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "./Header";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
import { useState , useEffect } from "react";
import axios from "axios";
import ForkLeftIcon from '@mui/icons-material/ForkLeft';
import StarIcon from '@mui/icons-material/Star';
import PeopleIcon from '@mui/icons-material/People';
// import Header from "../../components/Header";
// import LineChart from "../../components/LineChart";
// import GeographyChart from "../../components/GeographyChart";
// import BarChart from "../../components/BarChart";
// import StatBox from "../../components/StatBox";
// import ProgressCircle from "../../components/ProgressCircle";

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import {StaticNavBar} from "./Navbar.jsx";
import Avatar from "@mui/material/Avatar";
import {StaticNavBar2} from "./Navbar2.jsx";

const Dashboard = () => {
    const [theme, colorMode] = useMode();
    const colors = tokens(theme.palette.mode);
    let username = localStorage.getItem('username');
    const [name, setName] = useState(username);
    const [fork,setForks] = useState('');
    const [stars,setStars] = useState('');
    const [followers,setFollowers] = useState('');
    const [following,setFollowing] = useState('');
    const navigate = useNavigate();
    function renderRow(props) {
        const { index, style } = props;

        return (
            <ListItem style={style} key={index} component="div" disablePadding>
                <ListItemButton>
                    <ListItemText primary={`Item ${index + 1}`} />
                </ListItemButton>
            </ListItem>
        );
    }

    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await axios.get('http://localhost:5007/repos', {
                    headers: {
                        'gitHub-username': name,
                    },
                });

                setRepos(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching repos:', error.message);
            }
        };

        fetchRepos();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const options = {
                    headers: {
                        'Content-Type': 'application/json',
                        'username': username,
                    }
                };

                const dataResponse = await axios.post('http://localhost:5006/data', {}, options);
                console.log(dataResponse.data);
                setForks(dataResponse.data.forks);
                setStars(dataResponse.data.stars);

                const githubResponse = await axios.get(`https://api.github.com/users/${name}`);
                console.log(githubResponse.data.followers);
                setFollowers(githubResponse.data.followers);
                console.log(githubResponse.data.following);
                setFollowing(githubResponse.data.following);
            } catch (error) {
                console.error('Error:', error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <StaticNavBar2></StaticNavBar2>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Box m="20px">
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Box>
                                <Button
                                    sx={{
                                        backgroundColor: colors.blueAccent[700],
                                        color: colors.grey[100],
                                        fontSize: "14px",
                                        fontWeight: "bold",
                                        padding: "10px 20px",
                                    }}
                                    onClick={()=>navigate("/tools")}>
                                    View Tools
                                </Button>
                            </Box>
                        </Box>

                        <Box
                            display="grid"
                            gridTemplateColumns="repeat(12, 1fr)"
                            gridAutoRows="140px"
                            gap="20px"
                        >
                            <Box
                                gridColumn="span 3"
                                backgroundColor={colors.primary[400]}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Typography style={{marginLeft : "-10vh" , marginTop : "-13vh"}}>Total Forks</Typography>
                                <h1 style={{marginLeft : "5vh" , color : "White" , fontSize : "7vh"}}>{fork}</h1>
                                <div style={{}}>
                                    <h1><ForkLeftIcon style={{fontSize : "6vh"  , position : "relative" , left : "10vh" , top : "-3vh"}}></ForkLeftIcon></h1>
                                </div>
                            </Box>
                            <Box
                                gridColumn="span 3"
                                backgroundColor={colors.primary[400]}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Typography style={{marginLeft : "-10vh" , marginTop : "-13vh"}}> Total Stars</Typography>
                                <h1 style={{marginLeft : "5vh" , color : "White" , fontSize : "7vh"}}>{stars}</h1>
                                <div style={{}}>
                                    <h1><StarIcon style={{fontSize : "6vh"  , position : "relative" , left : "10vh" , top : "-3vh"}}></StarIcon></h1>
                                </div>
                            </Box>
                            <Box
                                gridColumn="span 3"
                                backgroundColor={colors.primary[400]}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Typography style={{marginLeft : "-10vh" , marginTop : "-13vh"}}> Total Followers</Typography>
                                <h1 style={{marginLeft : "5vh" , color : "White" , fontSize : "7vh"}}>{followers}</h1>
                                <div style={{}}>
                                    <h1><PeopleIcon style={{fontSize : "6vh"  , position : "relative" , left : "10vh" , top : "-3vh"}}></PeopleIcon></h1>
                                </div>
                            </Box>
                            <Box
                                gridColumn="span 3"
                                backgroundColor={colors.primary[400]}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Typography style={{marginLeft : "-10vh" , marginTop : "-13vh"}}>Following</Typography>
                                <h1 style={{marginLeft : "5vh" , color : "White" , fontSize : "7vh"}}>{following}</h1>
                                <div style={{}}>
                                    <h1><PeopleIcon style={{fontSize : "6vh"  , position : "relative" , left : "10vh" , top : "-3vh"}}></PeopleIcon></h1>
                                </div>

                            </Box>
                            <Box
                                gridColumn="span 8"
                                gridRow="span 2"
                                backgroundColor={colors.primary[400]}
                            >
                                <Box
                                    mt="25px"
                                    p="0 30px"
                                    display="flex "
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <div style={{marginTop : "-6.5vh"}}>
                                        <h1 style={{paddingBottom : "0.5vh"}}>Top 15 repos</h1>
                                        <Box
                                            sx={{ marginTop : "-3.5vh" ,  width: '100%', height: 300, maxWidth: 1100 }}>
                                            <ul style={{
                                                overflow: 'scroll',
                                                width: '90vh'
                                            }}>
                                                {repos.map((item) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        </Box>
                                    </div>
                                </Box>
                                <Box height="250px" m="-20px 0 0 0">
                                </Box>
                            </Box>
                            <Box
                                gridColumn="span 4"
                                gridRow="span 2"
                                backgroundColor={colors.primary[400]}
                                overflow="auto"
                            >
                                <img src={`https://github-readme-stats.vercel.app/api?username=${name}&theme=github_dark&show_icons=true`} alt="" />
                            </Box>
                            <Box
                                gridColumn="span 4"
                                gridRow="span 2"
                                backgroundColor={colors.primary[400]}
                                p="30px"
                            >
                                <Typography variant="h5" fontWeight="600">
                                    Most Used Languages
                                </Typography>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    mt="25px"
                                >
                                    <Typography
                                        variant="h5"
                                        color={colors.greenAccent[500]}
                                    >
                                        <img src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${name}&layout=donut&theme=prussian`} alt="Top Languages Card" />
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                gridColumn="span 4"
                                gridRow="span 2"
                                backgroundColor={colors.primary[400]}
                            >
                                <Typography
                                    variant="h5"
                                    fontWeight="600"
                                    sx={{ padding: "30px 30px 0 30px" }}
                                >
                                    <img src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${name}&layout=donut&theme=holi`} alt="Top Languages Card" />
                                </Typography>
                                <Box height="10px" mt="-20px">
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </div>
    );
};

export default Dashboard;