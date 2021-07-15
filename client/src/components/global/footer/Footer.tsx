import {
  Container, Grid, IconButton, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  Facebook, GitHub, Instagram, LinkedIn,
} from '@material-ui/icons';
import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& a': {
      cursor: 'pointer',
    },
  },
  outerContainer: {
    background: theme.palette.common.white,
    padding: 40,
    paddingBottom: 0,
    fontFamily: 'Josefin Sans',
    marginTop: '20px',
  },
  header: {
    color: theme.palette.primary.main,
    borderRightStyle: 'none',
    borderTopStyle: 'none',
    borderLeftStyle: 'none',
    borderStyle: 'solid',
    paddingBottom: 10,
    borderColor: theme.palette.primary.main,
    width: 260,
  },
  header2: {
    color: theme.palette.primary.main,
    borderRightStyle: 'none',
    borderTopStyle: 'none',
    borderLeftStyle: 'none',
    borderStyle: 'solid',
    paddingBottom: 10,
    borderColor: theme.palette.primary.main,
    width: 160,
  },

  subscribeBtn: {
    background: 'linear-gradient(180deg, #6769E5 0%, #B695EF 100%)',
    color: theme.palette.common.white,
    height: 35,
    width: 75,
    borderRadius: '0px 10px 10px 0px',
    border: 'none',
    fontSize: 12,
  },
  logo: {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 50,
    textAlign: 'center',
  },
  iconGrid: {
    textAlign: 'center',
    padding: 5,
  },
  icons: {
    marginLeft: 10,
    height: 30,
    width: 30,
    opacity: 0.7,
    '&:hover': {
      cursor: 'pointer',
      animation: 'float 1.5s ease-in-out infinite',
    },
  },
  iconsMobile: {
    marginLeft: 10,
    height: 30,
    width: 30,
    opacity: 0.7,
  },
  caption: {

    fontSize: 12,
    fontFamily: 'Josefin Sans',
    textAlign: 'center',
  },
  captionContainer: {
    padding: '10px 0',
    backgroundColor: theme.palette.background.default,
  },
  contact: {
    color: theme.palette.common.white,
    fontSize: 18,
  },
}));
const Footer = (props:any) => {
  /* const redirectSocial = (url) => {
    // this.window.open(url);
  }; */
  const classes = useStyles();
  return (
    <>
      <div className={classes.outerContainer}>
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              {/* @ts-ignore */}
              <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
            </Grid>

            <Grid container item xs={12} justifyContent="center">
              <Grid className={classes.iconGrid}>
                <IconButton>
                  <Facebook />
                </IconButton>
                <IconButton>
                  <Instagram />
                </IconButton>
                <IconButton>
                  <LinkedIn />
                </IconButton>
                <IconButton>
                  <GitHub />
                </IconButton>

              </Grid>
            </Grid>
          </Grid>

        </Container>
      </div>
      <Grid container spacing={1} className={classes.captionContainer}>
        <Grid item xs={12}>
          <Typography
            align="right"
            variant="caption"
            display="block"
            className={classes.caption}
          >
            We Are Still Dreamers
            {' '}
            © szcreativestudios
          </Typography>
        </Grid>

      </Grid>
    </>

  );
};

export default Footer;
