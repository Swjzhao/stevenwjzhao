import { Grid, Typography } from '@material-ui/core';
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
    </Grid>
  );
};

export default CategoryHeader;
