import {
  Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography,
} from '@material-ui/core';
import React from 'react';

import useStyles from './style';

const AuthForm = () => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">

      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              Forgot password?

            </Grid>
            <Grid item>
              Don&apos;t have an account? Sign Up

            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default AuthForm;
