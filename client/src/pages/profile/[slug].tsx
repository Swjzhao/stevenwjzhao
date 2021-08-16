import { CircularProgress, Container, Grid, Paper, TextField, Typography } from '@material-ui/core';
import cx from 'clsx';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import * as api from '../../api';
import sharedSectionStyles from '../../components/global/sections/styles';
import CustomTextField from '../../components/global/utils/CustomTextField';
import { IUpdateUser } from '../../interface';
import { updateUser } from '../../store/actions';
import useStyles from './style';

const Profile = (props: any) => {
  const router = useRouter();
  const methods = useForm();

  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const { slug } = router.query;

  const classes = useStyles();
  const sharedClasses = sharedSectionStyles();

  useEffect(() => {
    fetchUser();
  }, [slug]);

  const fetchUser = async () => {
    console.log(slug);
    try {
      const res = await api.getUser(slug as string);
      setUser(res.data);
    } catch (e) {
      // @ts-ignore
    }
    setLoading(true);
  };

  const handleSubmit = (data: IUpdateUser) => {
    dispatch(updateUser(data));
  };

  return (
    <div className={cx(sharedClasses.flexGrowWrapper)}>
      {user ? (
        <Container
          maxWidth={'md'}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Paper className={classes.profilePaper}>
            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit((data: IUpdateUser) => {
                  handleSubmit(data);
                })}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      fullWidth
                      defaultValue={user && user.email}
                      label="Email Address"
                      name="email"
                      variant="outlined"
                      disabled
                    ></TextField>
                  </Grid>
                  <CustomTextField
                    required
                    defaultValue={user && user.name}
                    label="Name"
                    name="name"
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
              </form>
            </FormProvider>
          </Paper>
        </Container>
      ) : (
        <div
          style={{
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {!loading ? (
            <Typography variant="h1">404: User not found</Typography>
          ) : (
            <CircularProgress />
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
