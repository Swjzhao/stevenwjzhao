import { Container, Grid, Typography } from '@material-ui/core';
// @ts-ignore
import cx from 'classnames';
import React, { useEffect, useState } from 'react';
import { BsTriangleFill } from 'react-icons/bs';
import Typist from 'react-typist';

import sharedSectionStyles from '../global/sections/styles';
import SocialMediaIcons from '../global/socialMedia/SocialMediaIcons';
import useStyles from './styles';

const LandingSection = () => {
  const classes = useStyles();
  const sharedClasses = sharedSectionStyles();
  const [count, setCount] = useState(1);
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
            </Grid>
            <Grid sm={3} item></Grid>

            <Grid
              sm={4}
              item
              className={sharedClasses.gridItemContainer}
              style={{ justifyContent: 'center' }}
            >
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
              <img
                src={
                  'https://media-exp1.licdn.com/dms/image/C5603AQHBMSesjLe3Yw/profile-displayphoto-shrink_200_200/0/1553361214770?e=1634169600&v=beta&t=3PeJof7oM6qgbYEkhL8GgkMN8a_GFL7_Q8xWKN1UU_4'
                }
                className={classes.profilePicImg}
              />
              <Typography
                color="primary"
                variant={'body1'}
                style={{ fontSize: '12pt', paddingBottom: '30px', textAlign: 'justify' }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;This site is for contenders in software who aspire to become
                exceptional. I aim to use this site to share my own experiences and road from 2x
                Google intern to CTO.
              </Typography>
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
