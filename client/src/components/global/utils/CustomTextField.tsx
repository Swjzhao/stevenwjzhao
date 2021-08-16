import { Grid, IconButton, InputAdornment, TextField } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const CustomTextField = (props: any) => {
  const { control } = useFormContext();
  const { name, label, defaultValue, required, col, error, autoFocus, type, autoComplete } = props;

  const [showPassword, setShowPassword] = useState(false);
  return (
    <Grid item xs={12} sm={col ?? 12}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            fullWidth
            color={undefined}
            defaultValue={defaultValue}
            label={label}
            required={required}
            autoFocus={autoFocus}
            autoComplete={autoComplete ?? name}
            type={type && !showPassword ? type : 'text'}
            error={!error || error === '' ? false : error}
            // eslint-disable-next-line
            {...field}
            variant="outlined"
            InputProps={
              type === 'password'
                ? {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onMouseDown={() => {
                            setShowPassword(true);
                          }}
                          onMouseUp={() => {
                            setShowPassword(false);
                          }}
                          onMouseLeave={() => {
                            setShowPassword(false);
                          }}
                          edge="end"
                          style={{
                            backgroundColor: 'transparent',
                          }}
                          disableRipple
                        >
                          {showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff
                              style={{
                                backgroundColor: 'transparent',
                              }}
                            />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }
                : {}
            }
          />
        )}
      />
    </Grid>
  );
};

export default CustomTextField;
