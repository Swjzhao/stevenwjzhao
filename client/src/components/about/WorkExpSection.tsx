import { Container, Grid, Paper, Typography } from '@material-ui/core';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
// @ts-ignore
import cx from 'classnames';
import React, { useEffect } from 'react';
import { BiLineChart } from 'react-icons/bi';
import { BsClipboardData } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

import sharedSectionStyles from '../global/sections/styles';
import useStyles from './styles';

const WorkExpSection = () => {
  const classes = useStyles();
  const sharedClasses = sharedSectionStyles();
  useEffect(() => {});
  return (
    <div className={cx(sharedClasses.sectionWrapper, sharedClasses.lightWrapper)}>
      <Container maxWidth={'xl'} className={cx(sharedClasses.sectionContainer)}>
        <Grid container style={{ flexGrow: 1, paddingTop: '50px' }} spacing={2}>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
            <Typography color="primary" variant="h2">
              Experience
            </Typography>
          </Grid>
          <Grid item xs={12} sm={1}></Grid>
          <Grid item xs={12} sm={10}>
            <Timeline align="alternate">
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography variant="body1" color="textSecondary">
                    June 2021 - Present
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <BiLineChart style={{ width: '24px', height: '24px' }} />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={0} className={classes.paper}>
                    <Typography color="primary" variant="h4">
                      Crabel Capital Management
                    </Typography>
                    <Typography color="primary" variant="subtitle1">
                      Full Stack Engineer
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography variant="body1" color="textSecondary">
                    Sept 2020 - May 2021
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <BsClipboardData style={{ width: '24px', height: '24px' }} />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={0} className={classes.paper}>
                    <Typography color="primary" variant="h4">
                      Dataraction Inc
                    </Typography>
                    <Typography color="primary" variant="subtitle1">
                      Chief Technology Officer
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography variant="body1" color="textSecondary">
                    May 2020 - Aug 2020
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <FcGoogle style={{ width: '24px', height: '24px' }} />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={0} className={classes.paper}>
                    <Typography color="primary" variant="h4">
                      Google
                    </Typography>
                    <Typography color="primary" variant="subtitle1">
                      Software Engineering Intern
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography variant="body1" color="textSecondary">
                    May 2019 - Aug 2019
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <FcGoogle style={{ width: '24px', height: '24px' }} />
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={0} className={classes.paper}>
                    <Typography color="primary" variant="h4">
                      Google
                    </Typography>
                    <Typography color="primary" variant="subtitle1">
                      Software Engineering Intern
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
          <Grid item xs={12} sm={1}></Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default WorkExpSection;
