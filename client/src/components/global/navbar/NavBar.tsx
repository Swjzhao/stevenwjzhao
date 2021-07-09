import {
  AppBar,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/HeaderLogoicon.png';
import useStyles from './style';

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar} color="transparent">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6">
            <Link to="/">
              <IconButton
                aria-label="Logo"
                color="primary"
                disableRipple
              >
                <img src={logo} alt="Title" height={40} />
              </IconButton>
            </Link>
          </Typography>
          <div className={classes.grow} />
          <div>
            <Button
              color="primary"
            >
              About
            </Button>
          </div>
          <div>
            <IconButton aria-label="SearchIcon" color="primary">
              <Search />
            </IconButton>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
