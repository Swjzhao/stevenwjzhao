import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import WelcomeImage from '../assets/welcomeImage1.png';
import NavBar from '../components/global/navbar/NavBar';

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
  return (
    <div className={classes.root}>
      <NavBar />
      <div className={classes.welcomeImage}>
        <img src={WelcomeImage} alt="Welcome" />
      </div>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item sm={9} xs={12} />
          <Grid item sm={3} xs={12} />
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
