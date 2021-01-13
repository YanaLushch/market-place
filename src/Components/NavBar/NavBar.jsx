import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import useStyles from './styles'

import logo from '../../assets/shop.png'


const NavBar = () => {
    const classes = useStyles();
    return(
        <>
        <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography variant='h6' className={classes.title} color='inherit'>
                    <img src={logo} alt='Commerce.js' height='25px' className={classes.image} />
                    My Shop
                </Typography>
                <div className={classes.grow}/>
                <div className={classes.button}>
                    <IconButton aria-label='Show cart items' color='inherit'>
                        <Badge badgeContent={2}>
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                </div>

            </Toolbar>

        </AppBar>
        </>
    )
}

export default NavBar;