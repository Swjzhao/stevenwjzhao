import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';

import { googleSignIn } from '../../../store/actions';

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

const useStyles = makeStyles((theme) => ({
  fullWidthButton: {
    width: '100%',
    justifyContent: 'center',
  },
}));

const SocialMediaLogin = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onGoogleSuccess = (response: any) => {
    // eslint-disable-next-line camelcase
    const { id_token } = response.getAuthResponse();
    dispatch(googleSignIn(id_token));
  };

  const onGoogleFailure = (response: any) => {
    console.log(response);
    // dispatch(setStatus({ status: 'error', error: response }));
  };
  /*
  const onFBSuccess = (response: FacebookLoginAuthResponse) => {
    const { accessToken, userID } = response.authResponse;
    dispatch(facebookLogin(accessToken, userID));
  };
  */

  return (
    <Grid item xs={12}>
      <GoogleLogin
        clientId={GOOGLE_CLIENT_ID as string}
        className={classes.fullWidthButton}
        uxMode="popup"
        buttonText={'Login with Google'}
        // isSignedIn={true}
        onSuccess={onGoogleSuccess}
        onFailure={onGoogleFailure}
        redirectUri={window && window.location.href}
      />
      {/*
      <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
          /> */}
    </Grid>
  );
};

export default SocialMediaLogin;
