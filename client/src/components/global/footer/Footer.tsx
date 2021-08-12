import { Button, Container, Divider, Grid, TextField, Typography } from '@material-ui/core';
import cx from 'clsx';
import React from 'react';

import sharedSectionStyles from '../sections/styles';
import SocialMediaIcons from '../socialMedia/SocialMediaIcons';
import useStyles from './styles';

const Footer = (props: any) => {
  /* const redirectSocial = (url) => {
    // this.window.open(url);
  }; */
  const classes = useStyles();
  const sharedClasses = sharedSectionStyles();
  return (
    <>
      <div className={cx(classes.outerContainer)}>
        <Container maxWidth={'lg'} className={sharedClasses.sectionContainer}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={3}>
              <img src={'/Logo-white-large.png'} style={{ width: '50%', marginLeft: '-15px' }} />
              <Typography color="primary" variant="subtitle2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry&apos;s standard dummy text ever
              </Typography>
            </Grid>

            <Grid item xs={12} sm={3}></Grid>
            <Grid item xs={12} sm={3}></Grid>
            <Grid sm={3} item className={sharedClasses.gridItemContainer}>
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
                  className={sharedClasses.textField}
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
            <Grid container item xs={12} justifyContent="center" className={classes.iconGrid}>
              <SocialMediaIcons />
            </Grid>
          </Grid>
        </Container>
        <Divider color="white" style={{ backgroundColor: '#818181' }} />
        <Grid container spacing={1} className={classes.captionContainer}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Typography
              align="right"
              color="primary"
              variant="caption"
              display="block"
              className={classes.caption}
            >
              We Are Still Dreamers © szcreativestudios
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Footer;
