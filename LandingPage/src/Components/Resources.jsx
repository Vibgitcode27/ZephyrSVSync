import React from 'react';
import { AppBar, Toolbar, Typography, List, ListItem, Link } from '@mui/material';
import './Resources.css'; // You can create a CSS file for additional styling

const Resources = () => {
    return (
        <div>
            <AppBar position="static" className="app-bar">
                <Toolbar>
                    <Typography variant="h6">Resources Links</Typography>
                </Toolbar>
            </AppBar>
            <div className="resources-container">
                <List>
                    <ListItem>
                        <Link href="https://github.com/pawelborkar/awesome-repos" target="_blank" rel="noopener noreferrer">Awesome Repos</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://github.com/pawelborkar/awesome-repos" target="_blank" rel="noopener noreferrer">Awesome Repos</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://github.com/getify/You-Dont-Know-JS" target="_blank" rel="noopener noreferrer">You Don't Know JS</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://github.com/codecrafters-io/build-your-own-x" target="_blank" rel="noopener noreferrer">Build Your Own X</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://github.com/donnemartin/system-design-primer" target="_blank" rel="noopener noreferrer">System Design Primer</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://github.com/public-apis/public-apis" target="_blank" rel="noopener noreferrer">Public APIs</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://github.com/kamranahmedse/developer-roadmap" target="_blank" rel="noopener noreferrer">Developer Roadmap</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://github.com/sindresorhus/awesome" target="_blank" rel="noopener noreferrer">Awesome</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://github.com/jwasham/coding-interview-university" target="_blank" rel="noopener noreferrer">Coding Interview University</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://github.com/EbookFoundation/free-programming-books" target="_blank" rel="noopener noreferrer">Free Programming Books</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://github.com/freeCodeCamp/freeCodeCamp" target="_blank" rel="noopener noreferrer">freeCodeCamp</Link>
                    </ListItem>
                </List>
            </div>
            <div className="coming-soon-container">
                <Typography variant="h6">More Coming Soon</Typography>
                <Typography>
                    Stay tuned for additional resources in the future.
                </Typography>
            </div>
        </div>
    );
};

export default Resources;