import { Backdrop, CircularProgress } from '@material-ui/core';
import React, { PropsWithChildren, useEffect } from 'react';
// @ts-ignore
import { useDispatch, useSelector } from 'react-redux';

import { IUser, RootStore } from '../../interface';
import { refreshToken } from '../../store/actions';
import Footer from './footer/Footer';
import Navbar from './navbar/NavBar';

interface IProps {
  needToolBar: boolean;
}

const Layout = ({ needToolBar, children }: PropsWithChildren<IProps>) => {
  const dispatch = useDispatch();
  const open = useSelector((state: RootStore) => state.status.status === 'loading');
  const user: IUser = useSelector((state: RootStore) => state?.user);
  useEffect(() => {
    if (!user) dispatch(refreshToken());
  }, [user]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
        overflowY: 'hidden',
        minHeight: '100vh',
      }}
    >
      <Backdrop open={open} style={{ zIndex: 1500, color: '#fff' }}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Navbar needToolBar={needToolBar} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
