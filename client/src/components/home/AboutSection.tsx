import { Button, Container, Grid, Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
// @ts-ignore
import cx from 'classnames';
import React from 'react';

import useStyles from './styles/sectionStyles';

const AboutSection = () => {
  const classes = useStyles();
  return (
    <div className={cx(classes.sectionWrapper, classes.darkWrapper)}>
      <Container maxWidth={'xl'} className={cx(classes.sectionContainer)}>
        <Grid container style={{ flexGrow: 1 }} spacing={4}>
          <Grid item sm={12} className={cx(classes.gridItemContainer)}>
            <div className={classes.aboutTextContainer}>
              <div></div>
              <Typography
                style={{ fontWeight: 'normal', textAlign: 'center', zIndex: 1 }}
                color="primary"
                variant="h2"
              >
                About
              </Typography>
            </div>
          </Grid>
          <Grid item lg={1} className={classes.hiddenGrid}></Grid>
          <Grid lg={3} md={4} item className={cx(classes.gridItemContainer)}>
            <Typography color={'primary'} variant="body1">
              A community for young innovators, enthuasists, entrepreneurs who think medicore is not
              enough.
            </Typography>
            <div className={classes.catHeaderButtonContainer}>
              <Button>
                <ArrowForwardIcon />
              </Button>{' '}
              <Typography color={'primary'}> Read More</Typography>
            </div>
          </Grid>

          <Grid sm={4} item className={cx(classes.gridItemCenter, classes.gridItemContainer)}>
            <div className={classes.photoContainer}>
              <img src="/photoOfMe.jpg" />
            </div>
          </Grid>

          <Grid lg={3} md={4} item className={cx(classes.gridItemContainer)}>
            <Typography style={{ fontWeight: 'normal' }} color="primary" variant="h4">
              Hi I&apos;m Steven!
            </Typography>
          </Grid>
          <Grid item lg={1} className={classes.hiddenGrid}></Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutSection;
