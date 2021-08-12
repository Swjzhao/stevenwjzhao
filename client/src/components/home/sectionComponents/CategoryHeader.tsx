import { Button, Grid, Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import cx from 'clsx';
import React from 'react';

import sharedSectionStyles from '../../global/sections/styles';
import useStyles from '../styles/sectionStyles';

const CategoryHeader = (props: any) => {
  const classes = useStyles();
  const sharedClasses = sharedSectionStyles();
  const { category, size } = props;
  return (
    <Grid
      sm={size ?? 4}
      item
      className={cx(sharedClasses.gridItemContainer, classes.catHeaderContainer)}
    >
      {category.includes('Health') && (
        <div className={classes.circleContainer}>
          <div className={'circle'}></div>
        </div>
      )}
      <Typography color="primary" variant="h2">
        {category}
      </Typography>
      <Typography variant="subtitle1">
        A community for young innovators, enthuasists, entrepreneurs who think medicore is not
        enough.
      </Typography>
      <div className={classes.catHeaderButtonContainer}>
        <Button>
          <ArrowForwardIcon />
        </Button>
        <Typography color={'primary'}> Read More</Typography>
      </div>
    </Grid>
  );
};

export default CategoryHeader;
