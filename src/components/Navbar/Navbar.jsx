import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Icon } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/shopnow.png';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color='inherit'>
                        <img src={logo} alt="Shopnow" height='25px' className={classes.image} />
                        Shopnow Store
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label='Show cart items' color='inherit'>
                            <Badge overlap="rectangular" badgeContent={totalItems} color='secondary'></Badge>
                            <ShoppingCart />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar