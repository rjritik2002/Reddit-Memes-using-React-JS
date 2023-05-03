import React from 'react';
import { AppBar, Toolbar } from '@mui/material';

const Header = () => {
    return (
        <AppBar color='action' position='static'>
            <Toolbar>
                <img src= {require("../reddit_logo.png")} style={{width:110}} alt="logo" />
            </Toolbar>
        </AppBar>
    )
}

export default Header;