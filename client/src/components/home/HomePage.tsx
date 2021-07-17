import 'react-popupbox/dist/react-popupbox.css';

import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

// @ts-ignore
import PostSection from './PostSection';
import SidePanelContainer from './SidePanelContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
  innerRoot: {
    width: '100vw',
    height: '100vh',
    overflowX: 'hidden',
    overflowY: 'auto',
  },
  welcomeImage: {
    width: '100%',
    // background: 'linear-gradient(0.25turn, #000, #111, #000)',
    height: '1000px',
    position: 'relative',
    maxHeight: '70vh',
    '& img': {
      width: 'auto',
      height: '1000px',
      maxHeight: '70vh',
    },
    '& div': {
      width: 'auto',
      height: '1000px',
      maxHeight: '70vh',
    },
  },
  logoContainer: {
    position: 'absolute',
    height: '100%',
    width: '100% !important',
    top: 0,
    '& img': {
      width: '50%',
      height: 'auto',
      objectFit: 'contain',
      marginRight: '50px',
    },
    '& .MuiGrid-item': {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  },
  mainPanelGrid: {
    [theme.breakpoints.up('sm')]: {
      paddingRight: '40px !important',
    },
  },
  sidePanelGrid: {
    borderLeft: '1px solid rgba(0, 0, 0, 0.05)',
  },
}));
const HomePage = () => {
  const classes = useStyles();
  const sections = ['Books', 'Health and Fitness', 'Other'];

  return (
    <>
      <div
        className={classes.welcomeImage}
        style={{
          background: 'url(/welcome3.png) center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Grid container className={classes.logoContainer} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <img src="/Logo-white.png" alt="WeAreStillDreamers" />
          </Grid>
          <Grid item sm={6}>
            {' '}
          </Grid>
        </Grid>
      </div>
      <br />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item sm={8} xs={12} className={classes.mainPanelGrid}>
            <PostSection sections={sections} />
          </Grid>
          <Grid item sm={4} xs={12} className={classes.sidePanelGrid}>
            <SidePanelContainer key={0} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
