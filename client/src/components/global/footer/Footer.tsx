import { Button, Container, Divider, Grid, TextField, Typography } from '@material-ui/core';
import cx from 'clsx';
import React from 'react';

import sharedSectionStyles from '../../../styles/pageSectionStyles';
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
        <Container maxWidth={'xl'} className={sharedClasses.sectionContainer}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4} xl={3}>
              <img src={'/Logo-white-large.png'} style={{ width: '180px', marginLeft: '-10px' }} />
              <Typography color="primary" variant="subtitle2">
                This site is for contenders in software who aspire to become exceptional. I aim to
                use this site to share my own experiences and road from 2x Google intern to CTO.{' '}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={5} xl={6}></Grid>
            <Grid sm={3} item className={sharedClasses.gridItemContainer}>
              <Typography
                color="primary"
                variant={'body1'}
                style={{ fontSize: '15pt', paddingBottom: '20px' }}
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
                  style={{ marginTop: '20px', padding: '10px 0' }}
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
          <Grid item xs={12}>
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
