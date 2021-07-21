import { Button, Grid, Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import React from 'react';

import useStyles from '../styles/sectionStyles';

const CategoryHeader = (props: any) => {
  const classes = useStyles();
  const { category } = props;
  return (
    <Grid sm={4} item className={classes.gridItemContainer}>
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
