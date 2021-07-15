import {
  AppBar,
  Avatar,
  Button,
  Container,
  IconButton,
  ListItem, ListItemIcon,
  ListItemText,
  Menu, Toolbar,
  Typography,
  useScrollTrigger,
} from '@material-ui/core';
import { ExitToApp, Menu as MenuIcon, Search } from '@material-ui/icons';
import React, { useState } from 'react';
// @ts-ignore
import { PopupboxManager } from 'react-popupbox';
import { useDispatch, useSelector } from 'react-redux';
import MediaQuery from 'react-responsive';

import { IUser, RootStore } from '../../../models';
import { signOut } from '../../../store/actions';
import AuthForm from '../auth/AuthForm';
import useStyles from './style';

const NavBar = (props:any) => {
  const classes = useStyles();
  const trigger = useScrollTrigger({ threshold: 0 });
  const user:IUser = useSelector((state: RootStore) => state?.user);

  const dispatch = useDispatch();
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  /*
  useEffect(() => {
    const handleScroll = (event:any) => {
    };
    window.addEventListener('scroll', handleScroll, true);
  }, []);
  */
  const openPopupbox = () => {
    const content = (
      <AuthForm />
    );
    PopupboxManager.open({ content });
  };

  const handleProfileMenuOpen = (event: any) => {
    setProfileAnchorEl(event.currentTarget);
    setProfileMenuOpen(true);
  };

  const handleMenuClose = () => {
    setProfileAnchorEl(null);
    setProfileMenuOpen(false);
  };

  const renderProfileMenu = (
    <Menu
      anchorEl={profileAnchorEl}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      elevation={1}
      keepMounted
      open={profileMenuOpen}
      onClose={handleMenuClose}
    >
      <ListItem
        button
        onClick={() => {
          handleMenuClose();
          // this.goToProfile();
        }}
      >
        <ListItemIcon>
          <Avatar
            src={user && user.avatar}
            alt=""
          />
        </ListItemIcon>
        <ListItemText primary="My Profile" />
      </ListItem>
      <ListItem
        button
        onClick={(e) => {
          e.preventDefault();
          handleMenuClose();
          // this.props.signOut();
          dispatch(signOut());
        }}
      >
        <ListItemIcon>
          <ExitToApp />
        </ListItemIcon>
        <ListItemText primary="Sign Out" />
      </ListItem>
    </Menu>
  );
  return (
    <AppBar position="fixed" className={classes.appBar} color={trigger ? 'default' : 'transparent'}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography variant="h6">
            <MediaQuery maxDeviceWidth={600}>
              <IconButton
                color={trigger ? 'inherit' : undefined}
                className={trigger ? '' : classes.activeButton}
                data-role="header-menu-icon-mobile"

              >
                <MenuIcon />
              </IconButton>
            </MediaQuery>
              <IconButton
                aria-label="Logo"
                color="primary"
                disableRipple
              >
                <img src="/HeaderLogoicon.png" alt="Title" height={40} />
              </IconButton>

          </Typography>
          <div className={classes.grow} />

          <MediaQuery minDeviceWidth={601}>
            <div>
              <Button
                color={trigger ? 'inherit' : undefined}
                className={trigger ? '' : classes.activeButton}
                disableRipple
              >
                About
              </Button>
            </div>
            <div>
              {user ? (
                <Button
                  color={trigger ? 'inherit' : undefined}
                  className={trigger ? '' : classes.activeButton}
                  disableRipple
                  onClick={handleProfileMenuOpen}
                >
                  {user.name}
                </Button>
              ) : (
                <Button
                  color={trigger ? 'inherit' : undefined}
                  className={trigger ? '' : classes.activeButton}
                  onClick={openPopupbox}
                  disableRipple
                >
                  SignUp / Login
                </Button>
              )}
            </div>
            {renderProfileMenu}
          </MediaQuery>
          <div>
            <IconButton
              aria-label="SearchIcon"
              color={trigger ? 'inherit' : undefined}
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
