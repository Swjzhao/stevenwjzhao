import {
  AppBar,
  Avatar,
  Button,
  Container,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@material-ui/core';
import { ExitToApp, Menu as MenuIcon, Search } from '@material-ui/icons';
// @ts-ignore
import cx from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
// @ts-ignore
import { useDispatch, useSelector } from 'react-redux';
import MediaQuery from 'react-responsive';

import { IUser, RootStore } from '../../../models';
import { signOut } from '../../../store/actions';
import AuthForm from '../auth/AuthForm';
import useStyles from './style';

const NavBar = (props: any) => {
  const classes = useStyles();
  const trigger = useScrollTrigger({ disableHysteresis: true });
  const user: IUser = useSelector((state: RootStore) => state?.user);
  const { needToolBar } = props;
  const router = useRouter();
  const dispatch = useDispatch();
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [openLogin, setOpenLogin] = useState(false);
  /*
  useEffect(() => {
    const handleScroll = (event:any) => {
    };
    window.addEventListener('scroll', handleScroll, true);
  }, []);
  */

  const handleProfileMenuOpen = (event: any) => {
    setProfileAnchorEl(event.currentTarget);
    setProfileMenuOpen(true);
  };

  const handleMenuClose = () => {
    setProfileAnchorEl(null);
    setProfileMenuOpen(false);
  };

  useEffect(() => {
    if (router.route === '/') {
      setActive(0);
    } else if (router.route === '/about') {
      setActive(1);
    } else {
      setActive(2);
    }
  });

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
          <Avatar src={user && user.avatar} alt="" />
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
    <AppBar
      position="fixed"
      className={classes.appBar}
      color={trigger || needToolBar ? undefined : 'transparent'}
      elevation={0}
    >
      <Container maxWidth="xl" className={classes.navContainer}>
        <Toolbar
          style={{ position: 'relative' }}
          className={trigger ? classes.scrollToolbar : ''}
          disableGutters
        >
          <Typography variant="h6">
            <MediaQuery maxDeviceWidth={600}>
              <IconButton
                style={{ backgroundColor: 'transparent' }}
                color={'primary'}
                data-role="header-menu-icon-mobile"
              >
                <MenuIcon />
              </IconButton>
            </MediaQuery>
            <IconButton
              aria-label="Logo"
              color="primary"
              style={{ backgroundColor: 'transparent' }}
              disableRipple
            >
              <Link href="/">
                <img src={'/Logo-white-large.png'} alt="Title" height={40} />
              </Link>
            </IconButton>
          </Typography>

          <MediaQuery minDeviceWidth={601}>
            <div className={classes.grow}></div>
            <div className={classes.navButtonContainer}>
              <Link href="/">
                <Button color={'primary'} disableRipple>
                  <Typography
                    variant="body1"
                    className={cx(classes.tab, active === 0 ? classes.activeTab : '')}
                  >
                    Home
                  </Typography>
                </Button>
              </Link>
              <Link href="/about">
                <Button color={'primary'} disableRipple>
                  <Typography
                    variant="body1"
                    className={cx(classes.tab, active === 1 ? classes.activeTab : '')}
                  >
                    About
                  </Typography>
                </Button>
              </Link>
            </div>
            {renderProfileMenu}
          </MediaQuery>
          <MediaQuery maxDeviceWidth={600}>
            <div className={classes.grow}></div>
          </MediaQuery>
          <div>
            <IconButton aria-label="SearchIcon" color={'primary'} disableRipple>
              <Search />
            </IconButton>
          </div>
          <div>
            {user ? (
              <Button color={'primary'} disableRipple onClick={handleProfileMenuOpen}>
                {user.name}
              </Button>
            ) : (
              <Button
                color={'primary'}
                variant="outlined"
                onClick={() => setOpenLogin(true)}
                disableRipple
              >
                <MediaQuery maxDeviceWidth={600}>Login</MediaQuery>
                <MediaQuery minDeviceWidth={601}>Signup / Login</MediaQuery>
              </Button>
            )}
          </div>
        </Toolbar>
      </Container>
      <AuthForm open={openLogin} setOpen={setOpenLogin} />
    </AppBar>
  );
};

export default NavBar;
