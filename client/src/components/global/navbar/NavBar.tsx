import {
  AppBar,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React, { useEffect } from 'react';
import { PopupboxManager } from 'react-popupbox';
import { Link } from 'react-router-dom';

import logo from '../../../assets/HeaderLogoicon.png';
import AuthForm from '../auth/AuthForm';
import useStyles from './style';

const NavBar = (props:any) => {
  const classes = useStyles();
  const trigger = useScrollTrigger();
  useEffect(() => {
    const handleScroll = (event:any) => {
    };
    window.addEventListener('scroll', handleScroll, true);
  }, []);
  const openPopupbox = () => {
    const content = (
      <AuthForm />
    );
    PopupboxManager.open({ content });
  };
  return (
    <AppBar position="fixed" className={classes.appBar} color={trigger ? 'info' : 'transparent'}>
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
              color={trigger ? 'inherit' : ''}
              className={trigger ? '' : classes.activeButton}
              disableRipple
            >
              About
            </Button>
          </div>
          <div>
            <Button
              color={trigger ? 'inherit' : ''}
              className={trigger ? '' : classes.activeButton}
              onClick={openPopupbox}
              disableRipple
            >
              SignUp/Login
            </Button>
          </div>
          <div>
            <IconButton
              aria-label="SearchIcon"
              color={trigger ? 'inherit' : ''}
              className={trigger ? '' : classes.activeButton}
              disableRipple
            >
              <Search />
            </IconButton>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
