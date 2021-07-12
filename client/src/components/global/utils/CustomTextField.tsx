import { Grid, TextField } from '@material-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const CustomTextField = (props:any) => {
  const { control } = useFormContext();
  const {
    name, label, required, col, autoFocus, type, autoComplete,
  } = props;
  return (
    <Grid item xs={12} sm={col ?? 12}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            fullWidth
            label={label}
            required={required}
            autoFocus={autoFocus}
            autoCapitalize={autoComplete ?? name}
            type={type ?? 'text'}
            // eslint-disable-next-line
            {...field}
            variant="outlined"
          />
        )}
      />
    </Grid>
  );
};

export default CustomTextField;
