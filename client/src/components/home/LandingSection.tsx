import { Button, Container, Grid, TextField, Typography, withStyles } from '@material-ui/core';
// @ts-ignore
import cx from 'classnames';
import React, { useEffect } from 'react';
// import DetailsRoundedIcon from '@material-ui/icons/DetailsRounded';
import { BsTriangleFill } from 'react-icons/bs';

import useStyles from './styles/sectionStyles';

const CssTextField = withStyles({
  root: {
    '& .MuiInputBase-root': {
      color: 'white',
    },
  },
})(TextField);

const LandingSection = (props: any) => {
  const classes = useStyles();
  useEffect(() => {}, []);
  return (
    <div className={cx(classes.sectionWrapper, classes.landingWrapper)}>
      <Container maxWidth={'xl'} className={cx(classes.sectionContainer, classes.landingContainer)}>
        <Container maxWidth={'xl'} className={classes.sectionContainer}>
          <Grid container style={{ flexGrow: 1 }}>
            <Grid sm={5} item className={classes.gridItemContainer}>
              <Typography variant="overline">OFFICIAL SITE</Typography>

              <Typography color="primary" variant="h1">
                We Are Dreamers
              </Typography>

              <Typography variant="subtitle1">
                A community for young innovators, enthuasists, entrepreneurs who think medicore is
                not enough.
              </Typography>
            </Grid>
            <Grid sm={4} item></Grid>
            <Grid sm={3} item className={classes.gridItemContainer} spacing={2}>
              <Typography
                color="primary"
                variant={'body1'}
                style={{ fontSize: '15pt', paddingBottom: '30px' }}
              >
                JOIN THE DREAMERS
              </Typography>
              <form style={{ display: 'flex', flexDirection: 'column' }}>
                <TextField
                  variant="standard"
                  label={'Enter Your Email'}
                  className={classes.root}
                  required
                />
                <Button
                  type="submit"
                  variant="outlined"
                  color="secondary"
                  fullWidth={false}
                  style={{ marginTop: '30px', padding: '10px 0' }}
                >
                  Subscribe
                </Button>
              </form>
            </Grid>
          </Grid>
        </Container>
        <Typography variant="body1" className={classes.scrollContainer}>
          <BsTriangleFill color="secondary" className={classes.scrollTriangle} />
          Scroll Down
        </Typography>
      </Container>
    </div>
  );
};

export default LandingSection;