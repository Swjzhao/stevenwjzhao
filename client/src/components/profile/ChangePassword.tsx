import { Button, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { changePassword } from '../../store/actions';
import CustomTextField from '../global/utils/CustomTextField';

const ChangePassword = () => {
  const dispatch = useDispatch();
  const [nativeError, setNativeError] = useState('');
  const handleChangePassword = async (password: string) => {
    try {
      dispatch(changePassword(password));
    } catch (err) {
      setNativeError(err.response.data.message);
    }
  };

  const methodsPassword = useForm();
  return (
    <FormProvider {...methodsPassword}>
      <form
        onSubmit={methodsPassword.handleSubmit((data: any) => {
          if (data['new-password'] && data['new-password'] !== data['confirm-new-password']) {
            setNativeError('Passwords dont match');
          } else {
            setNativeError('');
            handleChangePassword(data['new-password']);
          }
        })}
      >
        <Grid container spacing={3} style={{ marginTop: '10px' }}>
          <CustomTextField
            required
            name="new-password"
            label="New Password"
            type="password"
            error={nativeError}
          />
          <CustomTextField
            required
            name="confirm-new-password"
            label="Confirm New Password"
            type="password"
            error={nativeError}
          />
          <Typography color="error" style={{ minHeight: '19px', fontSize: '10px' }} component="p">
            {nativeError}
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
  );
};

export default ChangePassword;
