import {
  Button, Grid, Typography,
} from '@material-ui/core';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { IUserCredientials } from '../../../models';
import CustomTextField from '../utils/CustomTextField';

const SignUp = (props: any) => {
  const {
    classes, error, handleChange, handleSubmit, setIsSignIn,
  } = props;
  const methods = useForm();

  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <FormProvider {...methods}>
        <form
          className={classes.form}
          onChange={() => handleChange()}
          onSubmit={methods.handleSubmit((data:IUserCredientials) => {
            handleSubmit(data);
          })}
        >
          <Grid container spacing={2}>
            <CustomTextField
              required
              label="Name"
              name="name"
              autoFocus
            />
            <CustomTextField
              required
              label="Email Address"
              name="email"
              autoFocus
            />
            <CustomTextField
              required
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
          </Grid>
          <Typography color="secondary" style={{ minHeight: '19px', fontSize: '10px' }} component="p">{error}</Typography>
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
            Sign Up
          </Button>
          <Grid container justifyContent="center">
            <Grid item xs>
              Forgot password?
            </Grid>
            <Grid item>
              Have an account?
              {' '}
              <Button onClick={() => setIsSignIn(true)}>Sign In</Button>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </div>
  );
};

export default SignUp;
