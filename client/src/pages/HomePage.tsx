import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import WelcomeImage from '../assets/welcome3.png';
import Footer from '../components/global/footer/Footer.js';
import NavBar from '../components/global/navbar/NavBar';
import PostCardListing from '../components/home/PostCardListing';
import SidePanelContainer from '../components/home/SidePanelContainer';

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
  const sections = ['Books', 'Health and Fitness'];

  return (
    <div className={classes.root}>
      <NavBar />
      <div
        className={classes.welcomeImage}
        style={{
          background: `url(${WelcomeImage}) center`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div />
      </div>
      <br />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item sm={8} xs={12} className={classes.mainPanelGrid}>
            {sections.map((section) => (
              <PostCardListing key={section} title={section} />
            ))}
          </Grid>

          <Grid item sm={4} xs={12} className={classes.sidePanelGrid}>
            <SidePanelContainer />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;
