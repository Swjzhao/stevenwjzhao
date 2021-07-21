import { Button, Grid, Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
// @ts-ignore
import cx from 'classnames';
import React from 'react';

import useStyles from '../styles/sectionStyles';

const CategoryHeader = (props: any) => {
  const classes = useStyles();
  const { category, size } = props;
  return (
    <Grid sm={size ?? 4} item className={cx(classes.gridItemContainer, classes.catHeaderContainer)}>
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
        </Button>{' '}
        <Typography color={'primary'}> Read More</Typography>
      </div>
    </Grid>
  );
};

export default CategoryHeader;
