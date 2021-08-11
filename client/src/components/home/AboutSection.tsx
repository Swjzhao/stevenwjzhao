import { Button, Container, Grid, Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
// @ts-ignore
import cx from 'classnames';
import React from 'react';

import sharedSectionStyles from '../global/sections/styles';
import useStyles from './styles/sectionStyles';

const AboutSection = () => {
  const classes = useStyles();
  const sharedClasses = sharedSectionStyles();
  return (
    <div className={cx(sharedClasses.sectionWrapper, sharedClasses.darkWrapper)}>
      <Container maxWidth={'xl'} className={cx(sharedClasses.sectionContainer)}>
        <Grid container style={{ flexGrow: 1 }} spacing={4}>
          <Grid item sm={12} className={cx(sharedClasses.gridItemContainer)}>
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
          <Grid lg={3} md={4} item className={cx(sharedClasses.gridItemContainer)}>
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

          <Grid
            xs={12}
            sm={4}
            item
            className={cx(sharedClasses.gridItemCenter, sharedClasses.gridItemContainer)}
          >
            <div className={classes.photoContainer}>
              <img src="/photoOfMe.jpg" />
            </div>
          </Grid>

          <Grid lg={3} md={4} item className={cx(sharedClasses.gridItemContainer)}>
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
