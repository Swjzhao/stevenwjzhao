import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import WelcomeImage from '../assets/welcomeImage1.png';
import NavBar from '../components/global/navbar/NavBar';
import PostCardListing from '../components/home/PostCardListing';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
  },
  welcomeImage: {
    '& img': {
      width: '100%',
      height: 'auto',
    },
  },
}));
const HomePage = () => {
  const classes = useStyles();
  const sections = ['Books', 'Health and Fitness'];
  return (
    <div className={classes.root}>
      <NavBar />
      <div className={classes.welcomeImage}>
        <img src={WelcomeImage} alt="Welcome" />
      </div>
      <br />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item sm={8} xs={12}>
            {sections.map((section) => (
              <PostCardListing title={section} />
            ))}
          </Grid>

          <Grid item sm={4} xs={12} />
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
