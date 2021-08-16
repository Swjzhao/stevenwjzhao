import { Container, Dialog, DialogContent } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { IUserCredientials, RootStore } from '../../../interface';
import { clearStatus, signIn, signUp } from '../../../store/actions';
import SignIn from './SignIn';
import SignUp from './SignUp';
import useStyles from './style';

const AuthForm = (props: any) => {
  const classes = useStyles();
  const { open, setOpen } = props;
  const [isSignIn, setIsSignIn] = useState(true);
  const methods = useForm();
  const dispatch = useDispatch();
  const status = useSelector((state: RootStore) => state?.status);
  const user = useSelector((state: RootStore) => state?.user);
  useEffect(() => {
    if (user) {
      setOpen(false);
    }
  }, [user]);
  useEffect(() => {
    dispatch(clearStatus());
  }, []);

  const handleSubmit = (data: IUserCredientials) => {
    if (isSignIn) {
      dispatch(signIn(data));
    } else {
      dispatch(signUp(data));
    }
  };

  const handleChange = () => {
    dispatch(clearStatus());
  };
  return (
    <Dialog
      open={open}
      maxWidth={'xs'}
      className={classes.dialogContainer}
      onClose={() => setOpen(false)}
    >
      <DialogContent>
        <Container component="main" maxWidth="xs">
          {isSignIn ? (
            <SignIn
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              setIsSignIn={setIsSignIn}
              classes={classes}
              error={status.error}
            />
          ) : (
            <SignUp
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              setIsSignIn={setIsSignIn}
              classes={classes}
              error={status.error}
            />
          )}
        </Container>
      </DialogContent>
    </Dialog>
  );
};

export default AuthForm;
