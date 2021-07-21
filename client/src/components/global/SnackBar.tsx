import Snackbar from '@material-ui/core/Snackbar';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootStore } from '../../models';
import { hideSnackBar } from '../../store/actions';

const SnackBar = () => {
  const dispatch = useDispatch();
  const snackbarText: string | null = useSelector((state: RootStore) => state.global.snackbarText);

  return (
    <>
      <Snackbar
        open={snackbarText !== null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        onClose={() => {
          dispatch(hideSnackBar());
        }}
        autoHideDuration={1500}
        message={snackbarText}
      />
    </>
  );
};

export default SnackBar;
