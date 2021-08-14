import { Button, Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { IUserCredientials } from '../../../models';
import { resetPassword } from '../../../store/actions';
import CustomTextField from '../utils/CustomTextField';
import SocialMediaLogin from './SocialMediaLogin';

const SignIn = (props: any) => {
  const { classes, error, handleChange, handleSubmit, setIsSignIn } = props;
  const methods = useForm();

  const dispatch = useDispatch();

  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <FormProvider {...methods}>
        <form
          className={classes.form}
          onChange={() => handleChange()}
          onSubmit={methods.handleSubmit((data: IUserCredientials) => {
            handleSubmit(data, true);
          })}
        >
          <Grid container spacing={2}>
            <CustomTextField required label="Email Address" name="email" autoFocus />
            <CustomTextField
              required
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
          </Grid>
          <Typography color="error" style={{ minHeight: '19px', fontSize: '10px' }} component="p">
            {error}
          </Typography>
          {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <a
                href="javascript:void(0);"
                onClick={() => dispatch(resetPassword(methods.getValues('email')))}
                style={{ textDecoration: 'none', color: '#FFF' }}
              >
                Forgot password?
              </a>
            </Grid>
            <Grid item xs={12} className={classes.signInsignUpToggle}>
              Don&apos;t have an account?{' '}
              <Button onClick={() => setIsSignIn(false)}>Sign Up</Button>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
      <Divider />

      <Grid container spacing={2}>
        <SocialMediaLogin />
      </Grid>
    </div>
  );
};

export default SignIn;
