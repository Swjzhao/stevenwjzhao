import {
  Avatar,
  Button,
  CircularProgress,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import cx from 'clsx';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import * as api from '../../api';
import CustomTextField from '../../components/global/utils/CustomTextField';
import { IUpdateUser, IUser, RootStore } from '../../interface';
import { updateUser } from '../../store/actions';
import sharedSectionStyles from '../../styles/pageSectionStyles';
import useStyles from '../../styles/profilePageStyles';
import { roleArr } from '../../utils/constants';

const Profile = (props: any) => {
  const router = useRouter();
  const methods = useForm();
  const methodsPassword = useForm();

  const dispatch = useDispatch();

  const currentUser: IUser = useSelector((state: RootStore) => state?.user);

  const error = useSelector((state: RootStore) => state?.status?.error);
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [canEdit, setCanEdit] = useState(false);
  const [avatar, setAvatar] = useState<File | null>();
  const { slug } = router.query;

  const classes = useStyles();
  const sharedClasses = sharedSectionStyles();

  useEffect(() => {
    fetchUser();
  }, [slug]);

  useEffect(() => {
    if (user && currentUser) setCanEdit(user._id === currentUser._id);
  }, [currentUser, user]);

  const fetchUser = async () => {
    console.log(slug);
    try {
      const res = await api.getUser(slug as string);
      console.log(res.data);
      setUser(res.data as IUser);
      console.log('Hi');
      setCanEdit(user !== null && res.data._id === currentUser._id);
    } catch (e) {
      // @ts-ignore
    }
    setLoading(true);
  };

  const handleSubmit = (data: IUpdateUser) => {
    dispatch(updateUser(data));
  };

  const handleChangeFile = (e: any) => {
    const target = e.target as HTMLInputElement;
    const { files } = target;

    if (files) {
      const file = files[0];
      setAvatar(file);
    }
  };

  return (
    <div className={cx(sharedClasses.flexGrowWrapper)}>
      {user ? (
        <Container
          maxWidth={'md'}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Paper className={classes.profilePaper}>
            {canEdit ? (
              <>
                <FormProvider {...methods}>
                  <form
                    onSubmit={methods.handleSubmit((data: IUpdateUser) => {
                      handleSubmit(data);
                    })}
                  >
                    <Grid container spacing={3}>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          flexDirection: 'column',
                          alignItems: 'center',
                        }}
                      >
                        <Avatar
                          color={'primary'}
                          src={avatar ? URL.createObjectURL(avatar) : user.avatar}
                          style={{ width: '200px', height: '200px' }}
                        ></Avatar>
                        <span>
                          <input
                            type="file"
                            accept="image/*"
                            name="file"
                            id="file_up"
                            onChange={handleChangeFile}
                          />
                        </span>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <List>
                          <ListItem>
                            <ListItemText primary={'Role:'} />
                            <ListItemText primary={roleArr[user.role]} />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary={'Joined on:'} />
                            <ListItemText primary={user.createdAt} />
                          </ListItem>
                        </List>
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <TextField
                          fullWidth
                          defaultValue={user && user?.email}
                          label="Email Address"
                          name="email"
                          variant="outlined"
                          disabled
                        ></TextField>
                      </Grid>
                      <CustomTextField
                        required
                        defaultValue={user && user?.name}
                        label="Name"
                        name="name"
                        autoFocus
                      />

                      <Grid
                        item
                        xs={12}
                        sm={12}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Button variant="contained" color={'secondary'}>
                          Reset
                        </Button>
                        <Button variant="contained" color={'primary'}>
                          Save
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </FormProvider>
                <Divider color="primary" style={{ width: '100%', marginTop: '15px' }} />
                <FormProvider {...methodsPassword}>
                  <form
                    onSubmit={methodsPassword.handleSubmit((data: any) => {
                      console.log(data);
                    })}
                  >
                    <Grid container spacing={3} style={{ marginTop: '10px' }}>
                      <CustomTextField
                        required
                        name="new-password"
                        label="New Password"
                        type="password"
                      />
                      <CustomTextField
                        required
                        name="confirm-new-password"
                        label="Confirm New Password"
                        type="password"
                      />
                      <Typography
                        color="error"
                        style={{ minHeight: '19px', fontSize: '10px' }}
                        component="p"
                      >
                        {error}
                      </Typography>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        style={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                        }}
                      >
                        <Button variant="contained" color={'primary'} type="submit">
                          Confirm Change Password
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </FormProvider>
              </>
            ) : (
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Avatar
                    color={'primary'}
                    src={avatar ? URL.createObjectURL(avatar) : user.avatar}
                    style={{ width: '200px', height: '200px' }}
                  ></Avatar>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary={
                          <Grid container>
                            <Grid item xs={6}>
                              {'Name:'}
                            </Grid>
                            <Grid item xs={6}>
                              {user?.name}
                            </Grid>
                          </Grid>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary={
                          <Grid container>
                            <Grid item xs={6}>
                              {'Role:'}
                            </Grid>
                            <Grid item xs={6}>
                              {roleArr[user.role]}
                            </Grid>
                          </Grid>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary={
                          <Grid container>
                            <Grid item xs={6}>
                              {'Joined on:'}
                            </Grid>
                            <Grid item xs={6}>
                              {user.createdAt}
                            </Grid>
                          </Grid>
                        }
                      />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            )}
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
