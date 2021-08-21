import { Container, Grid, Typography } from '@material-ui/core';
import cx from 'clsx';
import React, { useEffect } from 'react';

import sharedSectionStyles from '../../styles/pageSectionStyles';
import useStyles from './styles';

const ProjectSection = () => {
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
      <Container maxWidth={'xl'} className={cx(sharedClasses.sectionContainer)}>
        <Grid container className={classes.aboutGridContainer} spacing={2}>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
            <Typography color="primary" variant="h2">
              Projects
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProjectSection;
