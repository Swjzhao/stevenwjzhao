import React, { PropsWithChildren } from 'react';
// @ts-ignore
import { PopupboxContainer } from 'react-popupbox';

import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';

interface IProps { }

const Layout = ({ children }: PropsWithChildren<IProps>) => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      overflowX: 'hidden',
      overflowY: 'hidden',
    }}>

      <PopupboxContainer />

      <Navbar />
      { children }
      <Footer />
    </div>
);

export default Layout;
