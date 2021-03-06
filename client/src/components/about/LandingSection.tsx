import {
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import cx from 'clsx';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BsTriangleFill } from 'react-icons/bs';
// @ts-ignore
import LinesEllipsis from 'react-lines-ellipsis';
import Typist from 'react-typist';

import sharedSectionStyles from '../../styles/pageSectionStyles';
import SocialMediaIcons from '../global/socialMedia/SocialMediaIcons';
import useStyles from './styles';

const LandingSection = () => {
  const classes = useStyles();
  const sharedClasses = sharedSectionStyles();
  const [count, setCount] = useState(1);
  const isDesktop = useMediaQuery((theme: any) => theme.breakpoints.up('sm'));
  useEffect(() => {
    setCount(1);
  }, [count]);

  return (
    <div
      className={cx(
        sharedClasses.sectionWrapper,
        sharedClasses.darkWrapper,
        classes.landingContainer
      )}
    >
      <Container maxWidth={'xl'} className={cx(sharedClasses.sectionContainer)}>
        <Container maxWidth={'xl'} className={sharedClasses.sectionContainer}>
          <Grid container style={{ flexGrow: 1 }}>
            <Grid sm={5} item className={sharedClasses.gridItemContainer}>
              <Typography variant="overline">OFFICIAL SITE</Typography>

              <Typography color="primary" variant="h1" className={sharedClasses.logoText}>
                Hi! I&apos;m Steven
              </Typography>

              <Typography
                color="primary"
                variant="h4"
                style={{ paddingTop: '30px', paddingBottom: '30px' }}
              >
                {count ? (
                  <Typist onTypingDone={() => setCount(0)}>
                    Student
                    <Typist.Backspace count={8} delay={1000} />
                    Dreamer
                    <Typist.Backspace count={9} delay={1000} />
                    Entrepreneur
                    <Typist.Backspace count={12} delay={1500} />
                  </Typist>
                ) : (
                  ' '
                )}
              </Typography>
              {isDesktop ? (
                <Link href="/">
                  <div className={sharedClasses.readMoreContainer}>
                    <Button>
                      <ArrowForwardIcon />
                    </Button>
                    <Typography color={'primary'}>Read My Blogs</Typography>
                  </div>
                </Link>
              ) : (
                ''
              )}
            </Grid>
            <Grid sm={3} item></Grid>

            <Grid
              sm={4}
              item
              className={sharedClasses.gridItemContainer}
              style={{ justifyContent: 'center' }}
            >
              {isDesktop ? (
                <>
                  <Typography
                    color="primary"
                    variant={'body1'}
                    style={{ fontSize: '12pt', textAlign: 'center' }}
                  >
                    Univesity Of Toronto - Computer Engineering
                  </Typography>
                  <Typography
                    color="primary"
                    variant={'body1'}
                    style={{ fontSize: '12pt', textAlign: 'center' }}
                  >
                    Expected Grad April 2022
                  </Typography>
                </>
              ) : (
                <Typography
                  color="primary"
                  variant={'body1'}
                  style={{ fontSize: '12pt', textAlign: 'center' }}
                >
                  Univesity Of Toronto - Computer Engineering : Grad April 2022
                </Typography>
              )}
              <img
                src={
                  'https://media-exp1.licdn.com/dms/image/C5603AQHBMSesjLe3Yw/profile-displayphoto-shrink_200_200/0/1553361214770?e=1634169600&v=beta&t=3PeJof7oM6qgbYEkhL8GgkMN8a_GFL7_Q8xWKN1UU_4'
                }
                className={classes.profilePicImg}
              />
              <Link href="https://dotslive.medium.com/from-food-delivery-drones-to-research-platforms-the-journey-of-21-year-old-entrepreneur-steven-983e2059d86e">
                <div className={classes.featured}>
                  <List>
                    <ListItem>
                      <ListItemText primary={<b>Medium article:</b>} />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary={
                          <LinesEllipsis
                            text={
                              'From Food Delivery Drones to Research Platforms ??? The Journey of 21 Year-Old Entrepreneur Steven Zhao'
                            }
                            maxLine="3"
                            ellipsis="..."
                            trimRight
                            basedOn="words"
                          />
                        }
                        secondary={
                          <LinesEllipsis
                            text={
                              'I was in the mindset of,hey I want to build something for myselt. I want to wake up and be like "Yeah I want to work on this today!"'
                            }
                            maxLine="2"
                            ellipsis="..."
                            trimRight
                            basedOn="words"
                          />
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText secondary={'5 min read'} />
                    </ListItem>
                  </List>
                </div>
              </Link>
              {isDesktop ? (
                ''
              ) : (
                <Link href="/">
                  <div className={sharedClasses.readMoreContainer}>
                    <Button>
                      <ArrowForwardIcon />
                    </Button>
                    <Typography color={'primary'}> Read My Blogs</Typography>
                  </div>
                </Link>
              )}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <SocialMediaIcons />
              </div>
            </Grid>
          </Grid>
        </Container>
        <Typography variant="body1" className={sharedClasses.scrollContainer}>
          <BsTriangleFill color="secondary" className={sharedClasses.scrollTriangle} />
          Scroll Down
        </Typography>
      </Container>
    </div>
  );
};

export default LandingSection;
