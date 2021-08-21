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

import sharedSectionStyles from '../../styles/pageSectionStyles';
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
                    <Typography variant="body2" color="textSecondary">
                      June 2021 - Present
                    </Typography>
                    <Typography
                      color="primary"
                      variant="h6"
                      style={{ fontSize: '1rem !important' }}
                    >
                      Crabel Capital Management
                    </Typography>
                    <Typography color="primary" variant="body2">
                      Full Stack Engineer
                    </Typography>
                    <Typography color="secondary" variant="body2">
                      TypeScript, React, RPC, HighCharts, Python
                    </Typography>
                  </Paper>
                  <ul className={classes.resumeDescription}>
                    <li>
                      <Typography color="primary" variant="subtitle2">
                        Analyzed csv and roi with millions of data points from simulated data and
                        presented the data in a user-friendly dashboard for US tech-based capital
                        management company
                      </Typography>
                    </li>
                    <li>
                      <Typography color="primary" variant="subtitle2">
                        Reduced DOM refresh frequency when interacting with chart by <b>90%</b>{' '}
                        using React methods and lazy loading
                      </Typography>
                    </li>
                    <li>
                      <Typography color="primary" variant="subtitle2">
                        Reduced load time for analyzing and displaying data by <b>96%</b> from 20
                        secs to 0.8 secs by using efficientalgorithms and caches
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
                    <Typography variant="body2" color="textSecondary">
                      Aug 2020 - May 2021
                    </Typography>
                    <Typography color="primary" variant="h6">
                      Dataraction Inc
                    </Typography>
                    <Typography color="primary" variant="body2">
                      Chief Technology Officer
                    </Typography>
                    <Typography color="secondary" variant="body2">
                      JavaScript, React, NextJs, LoopBack, NodeJs, GraphQL, PostGres, MongoDB,
                      Kubernetes, OpenShift, WebSocket, Agora
                    </Typography>
                  </Paper>
                  <ul className={classes.resumeDescription}>
                    <li>
                      <Typography color="primary" variant="subtitle2">
                        Brought in over <b>1500</b> sign ups and <b>100</b> live viewers per event
                        (still growing) and succeeded in helping the company get in revenue through
                        a client contract worth <b>$5000/month</b>
                      </Typography>
                    </li>
                    <li>
                      <Typography color="primary" variant="subtitle2">
                        Hired, coached, and led 10 developers using Agile management to build a SaaS
                        and stand-alone live streamingplatform with React (later migrated to
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
                        Initialized and maintained backend on Kubernetes cluster containerized with
                        Docker, and later migrated toOpenShift to better log user activity for
                        analytics
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
                    <Typography variant="body2" color="textSecondary">
                      May 2020 - Aug 2020
                    </Typography>
                    <Typography color="primary" variant="h6">
                      Google
                    </Typography>
                    <Typography color="primary" variant="body2">
                      Software Engineering Intern
                    </Typography>
                    <Typography color="secondary" variant="body2">
                      Java, TypeScript, JavaScript, RPC
                    </Typography>
                  </Paper>
                  <ul className={classes.resumeDescription}>
                    <li>
                      <Typography color="primary" variant="subtitle2">
                        Developed a feature on Google Travel involving complex modeling in
                        considering user behavior, impact onrevenue, and creative logging to
                        maximize feature
                      </Typography>
                    </li>
                    <li>
                      <Typography color="primary" variant="subtitle2">
                        Utilized complex web frameworks, RPCs (remote procedural call), and services
                        using Java and JavaScript
                      </Typography>
                    </li>
                    <li>
                      <Typography color="primary" variant="subtitle2">
                        Completed the entire software engineering development process; wrote a
                        comprehensive design doc, wrote unittests, went through design reviews /
                        discussions
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
                    <Typography variant="body2" color="textSecondary">
                      May 2019 - Aug 2019
                    </Typography>
                    <Typography color="primary" variant="h6">
                      Google
                    </Typography>
                    <Typography color="primary" variant="body2">
                      Software Engineering Intern
                    </Typography>
                    <Typography color="secondary" variant="body2">
                      Objective C, JavaScript, iOS
                    </Typography>
                  </Paper>
                  <ul className={classes.resumeDescription}>
                    <li>
                      <Typography color="primary" variant="subtitle2">
                        Developed and rolled out a button for Gmail iOS which is visible in iOS App
                      </Typography>
                    </li>
                    <li>
                      <Typography color="primary" variant="subtitle2">
                        Implemented an entirely new interaction handler for iPad Gmail iOS using
                        native Objective C with JavaScriptwith unit tests and integration tests and
                        set the foundation for future development
                      </Typography>
                    </li>
                    <li>
                      <Typography color="primary" variant="subtitle2">
                        Wrote a comprehensive design doc and went through design reviews/discussions
                        and QA review
                      </Typography>
                    </li>
                  </ul>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
            <a
              href="/Wen-Jie-Steven-Zhao-Resume.pdf"
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
