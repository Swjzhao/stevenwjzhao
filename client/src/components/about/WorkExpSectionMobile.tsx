import { Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
// @ts-ignore
import cx from 'clsx';
import React, { useEffect } from 'react';
import { BiLineChart } from 'react-icons/bi';
import { BsClipboardData } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

import sharedSectionStyles from '../global/sections/styles';
import useStyles from './styles';

const WorkExpSectionMobile = () => {
  const classes = useStyles();
  const sharedClasses = sharedSectionStyles();
  useEffect(() => {});
  return (
    <div
      className={cx(
        sharedClasses.sectionWrapper,
        sharedClasses.lightWrapper,
        classes.watermarkWrapper
      )}
    >
      <div className="watermarkContainer">
        <p className="watermark">Experience</p>
      </div>
      <Container maxWidth={'xl'} className={cx(sharedClasses.sectionContainer)}>
        <Grid container className={classes.aboutGridContainer} spacing={2}>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
            <Typography color="primary" variant="h2">
              Experience
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Timeline className={classes.timelineContainer}>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <BiLineChart style={{ width: '24px', height: '24px' }} />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={0} className={classes.paper}>
                    <Typography variant="body1" color="textSecondary">
                      June 2021 - Present
                    </Typography>
                    <Typography color="primary" variant="h4">
                      Crabel Capital Management
                    </Typography>
                    <Typography color="primary" variant="subtitle1">
                      Full Stack Engineer
                    </Typography>
                  </Paper>
                  <ul className={classes.resumeDescription}>
                    <li>
                      <Typography color="primary" variant="subtitle2">
                        Collaborated with a US tech based capital management company where I
                        analyzed millions of data pointsfrom stimulated data and presented it in a
                        user friendly dashboard
                      </Typography>
                    </li>
                    <li>
                      <Typography color="primary" variant="subtitle2">
                        Reduced load time for analyzing and displaying data by <b>98%</b> by using
                        efficient algorithms and caches
                      </Typography>
                    </li>
                  </ul>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <BsClipboardData style={{ width: '24px', height: '24px' }} />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent style={{ textAlign: 'left' }}>
                  <Paper elevation={0} className={classes.paper}>
                    <Typography variant="body1" color="textSecondary">
                      Aug 2020 - May 2021
                    </Typography>
                    <Typography color="primary" variant="h4">
                      Dataraction Inc
                    </Typography>
                    <Typography color="primary" variant="subtitle1">
                      Chief Technology Officer
                    </Typography>
                  </Paper>
                  <ul className={classes.resumeDescription}>
                    <li>
                      <Typography color="primary" variant="subtitle2">
                        Brought in over <b>1500</b> sign ups and <b>100</b> live viewers per event
                        (still growing) and succeeded in helping company get in revenue through a
                        client contract worth <b>$5000/month</b>
                      </Typography>
                    </li>
                    <li>
                      <Typography color="primary" variant="subtitle2">
                        Hired, coached and led 10 developers using Agile management to build a SaaS
                        and stand-alone livestreaming platform with React (later migrated to
                        Next.JS) front end with JEST for testing
                      </Typography>
                    </li>
                    <li>
                      <Typography color="primary" variant="subtitle2">
                        Led team to build a fully functional Postgres and MongoDB database on
                        Loopback 4 (Node.js framework withGraphQL) and real-time comments, polls,
                        and reactions with WebSocket
                      </Typography>
                    </li>
                    <li>
                      <Typography color="primary" variant="subtitle2">
                        Deployed backend on Kubernetes cluster containerized with Docker, and later
                        migrated to OpenShift tobetter log user activity for analytics
                      </Typography>
                    </li>
                  </ul>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <FcGoogle style={{ width: '24px', height: '24px' }} />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent style={{ textAlign: 'left' }}>
                  <Paper elevation={0} className={classes.paper}>
                    <Typography variant="body1" color="textSecondary">
                      May 2020 - Aug 2020
                    </Typography>
                    <Typography color="primary" variant="h4">
                      Google
                    </Typography>
                    <Typography color="primary" variant="subtitle1">
                      Software Engineering Intern
                    </Typography>
                  </Paper>
                  <ul className={classes.resumeDescription}>
                    <li>
                      <Typography color="primary" variant="subtitle2">
                        Collaborated with a US tech based capital management company where I
                        analyzed millions of data pointsfrom stimulated data and presented it in a
                        user friendly dashboard
                      </Typography>
                    </li>
                    <li>
                      <Typography color="primary" variant="subtitle2">
                        Reduced load time for analyzing and displaying data by <b>98%</b> by using
                        efficient algorithms and caches
                      </Typography>
                    </li>
                  </ul>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <FcGoogle style={{ width: '24px', height: '24px' }} />
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent style={{ textAlign: 'left' }}>
                  <Paper elevation={0} className={classes.paper}>
                    <Typography variant="body1" color="textSecondary">
                      May 2019 - Aug 2019
                    </Typography>
                    <Typography color="primary" variant="h4">
                      Google
                    </Typography>
                    <Typography color="primary" variant="subtitle1">
                      Software Engineering Intern
                    </Typography>
                  </Paper>
                  <ul className={classes.resumeDescription}>
                    <li>
                      <Typography color="primary" variant="subtitle2">
                        Collaborated with a US tech based capital management company where I
                        analyzed millions of data pointsfrom stimulated data and presented it in a
                        user friendly dashboard
                      </Typography>
                    </li>
                    <li>
                      <Typography color="primary" variant="subtitle2">
                        Reduced load time for analyzing and displaying data by <b>98%</b> by using
                        efficient algorithms and caches
                      </Typography>
                    </li>
                  </ul>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
            <a
              href="files/Resume.pdf"
              download="Resume-Steven (Wen Jie) Zhao"
              style={{ textDecoration: 'none' }}
            >
              <Button variant="contained" color="secondary" startIcon={<GetAppIcon />}>
                <Typography>Resume</Typography>
              </Button>
            </a>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default WorkExpSectionMobile;
