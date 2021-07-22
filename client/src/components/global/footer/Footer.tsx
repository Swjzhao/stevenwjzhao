import {
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@material-ui/core';
import { Facebook, GitHub, Instagram, LinkedIn } from '@material-ui/icons';
// @ts-ignore
import cx from 'classnames';
import React from 'react';

import useStyles from '../../home/styles/sectionStyles';

const Footer = (props: any) => {
  /* const redirectSocial = (url) => {
    // this.window.open(url);
  }; */
  const classes = useStyles();
  return (
    <>
      <div className={cx(classes.outerContainer)}>
        <Container maxWidth={'lg'} className={(classes.sectionContainer, classes.landingContainer)}>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <img src={'/Logo-white-large.png'} style={{ width: '50%', marginLeft: '-15px' }} />
              <Typography color="primary" variant="subtitle2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever
              </Typography>
            </Grid>

            <Grid item xs={3}></Grid>
            <Grid item xs={3}></Grid>
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
                  className={classes.textField}
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
            <Grid container item xs={12} justifyContent="center">
              <Grid className={classes.iconGrid}>
                <IconButton color="secondary">
                  <Facebook />
                </IconButton>
                <IconButton color="secondary">
                  <Instagram />
                </IconButton>
                <IconButton color="secondary">
                  <LinkedIn />
                </IconButton>
                <IconButton color="secondary">
                  <GitHub />
                </IconButton>
              </Grid>
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
