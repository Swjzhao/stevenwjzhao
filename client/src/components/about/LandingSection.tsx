import { Container, Grid, Typography } from '@material-ui/core';
// @ts-ignore
import cx from 'classnames';
import React from 'react';
import { BsTriangleFill } from 'react-icons/bs';

import sharedSectionStyles from '../global/sections/styles';

const LandingSection = () => {
  const sharedClasses = sharedSectionStyles();
  return (
    <div className={cx(sharedClasses.sectionWrapper, sharedClasses.darkWrapper)}>
      <Container maxWidth={'xl'} className={cx(sharedClasses.sectionContainer)}>
        <Container maxWidth={'xl'} className={sharedClasses.sectionContainer}>
          <Grid container style={{ flexGrow: 1 }}></Grid>
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
