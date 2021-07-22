import {
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Facebook, GitHub, Instagram, LinkedIn } from '@material-ui/icons';
import React from 'react';
// @ts-ignore

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& a': {
      cursor: 'pointer',
    },
  },
  outerContainer: {
    // @ts-ignore
    background: theme.palette.backgroundColors.light,
    padding: '50px 16px 20px 16px',
    // boxShadow: `0 0 100px 100px ${theme.palette.backgroundColors.main} inset`,
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
  },
  contact: {
    color: theme.palette.common.white,
    fontSize: 18,
  },
  gridItemContainer: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textField: {
    position: 'relative',
    padding: '10px 0',
    '& .MuiInputLabel-root': {
      // @ts-ignore
      color: theme.palette.textColor.subtext,
    },
    '& .MuiInput-underline:before': {
      // @ts-ignore
      borderColor: `${theme.palette.textColor.subtext} !important`,
    },

    '& .MuiInputBase-input': {
      color: theme.palette.primary.main,
    },
  },
}));
const Footer = (props: any) => {
  /* const redirectSocial = (url) => {
    // this.window.open(url);
  }; */
  const classes = useStyles();
  return (
    <>
      <div className={classes.outerContainer}>
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={6}></Grid>
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
