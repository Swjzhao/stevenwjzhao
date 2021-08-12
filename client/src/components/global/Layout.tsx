import React, { PropsWithChildren, useEffect } from 'react';
// @ts-ignore
import { useDispatch } from 'react-redux';

import { refreshToken } from '../../store/actions';
import Footer from './footer/Footer';
import Navbar from './navbar/NavBar';

interface IProps {
  needToolBar: boolean;
}

const Layout = ({ needToolBar, children }: PropsWithChildren<IProps>) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshToken());
  });

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
      <Navbar needToolBar={needToolBar} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
