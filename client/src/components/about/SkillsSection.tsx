import { Container, Grid, Paper, Typography } from '@material-ui/core';
import cx from 'clsx';
import React, { useEffect } from 'react';

import sharedSectionStyles from '../global/sections/styles';
import useStyles from './styles';

const SkillsSection = () => {
  const classes = useStyles();
  const sharedClasses = sharedSectionStyles();
  useEffect(() => {});
  return (
    <div className={cx(sharedClasses.darkWrapper, classes.watermarkWrapper)}>
      <div className="watermarkContainer">
        <p className="bubblewatermark">Skill</p>
      </div>
      <Container maxWidth={'lg'}>
        <Grid container spacing={4} className={classes.aboutGridContainer}>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
            <Typography color="primary" variant="h2">
              Skills
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.skillsContainer}>
            <Paper>
              <Typography color="primary" variant="h4">
                <b>1</b> Expert
              </Typography>

              <br />
              <Typography variant="subtitle1">
                Java, JavaScript, HTML/CSS/PHP, React, Next, Node, Objective C, MongoDB, Git,
                Flutter, Firebase
              </Typography>
              <div className={cx(classes.ratingSystem)}>
                <div className={cx(classes.rating, classes.fill)}></div>
                <div className={cx(classes.rating, classes.fill)}></div>
                <div className={cx(classes.rating, classes.fill)}></div>
                <div className={cx(classes.rating, classes.fill)}></div>
                <div className={cx(classes.rating, classes.fill)}></div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.skillsContainer}>
            <Paper>
              <Typography color="primary" variant="h4">
                <b>2</b> Advanced
              </Typography>

              <br />
              <Typography variant="subtitle1">
                Python, Django, Objective C, Swift, Postgres, MySQL, WebSocket, RPC
              </Typography>
              <div className={cx(classes.ratingSystem)}>
                <div className={cx(classes.rating, classes.fill)}></div>
                <div className={cx(classes.rating, classes.fill)}></div>
                <div className={cx(classes.rating, classes.fill)}></div>
                <div className={cx(classes.rating, classes.fill)}></div>
                <div className={cx(classes.rating)}></div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.skillsContainer}>
            <Paper>
              <Typography color="primary" variant="h4">
                <b>3</b> Intermediate
              </Typography>
              <br />
              <Typography variant="subtitle1">
                C++, C, Docker, Kubernetes, OpenShift, SpringBoot, TensorFlow, PyTorch, MATLAB
              </Typography>
              <div className={cx(classes.ratingSystem)}>
                <div className={cx(classes.rating, classes.fill)}></div>
                <div className={cx(classes.rating, classes.fill)}></div>
                <div className={cx(classes.rating, classes.fill)}></div>
                <div className={cx(classes.rating)}></div>
                <div className={cx(classes.rating)}></div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SkillsSection;
