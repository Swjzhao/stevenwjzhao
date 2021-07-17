import 'react-popupbox/dist/react-popupbox.css';

import React, { PropsWithChildren } from 'react';
// @ts-ignore
import { PopupboxContainer } from 'react-popupbox';

import Footer from './footer/Footer';
import Navbar from './navbar/NavBar';

interface IProps { needToolBar: boolean }

const Layout = ({ needToolBar, children }: PropsWithChildren<IProps>) => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      overflowX: 'hidden',
      overflowY: 'hidden',
      minHeight: '100vh',
    }}>

      <PopupboxContainer />

      <Navbar needToolBar={needToolBar} />
      { children }
      <Footer />
    </div>
);

export default Layout;
