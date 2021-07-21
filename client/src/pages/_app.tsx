import '../index.css';

import { CssBaseline, Toolbar } from '@material-ui/core';
import {
  createGenerateClassName,
  createTheme,
  StylesProvider,
  ThemeProvider,
} from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import { createWrapper } from 'next-redux-wrapper';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';

import Layout from '../components/global/Layout';
import SnackBar from '../components/global/SnackBar';
import store from '../store';

const theme = createTheme({
  typography: {
    // fontFamily: 'Open Sans',
    h1: {
      fontFamily: 'Poppins',
      fontWeight: 700,
      fontSize: '60pt',
    },
    h2: {
      fontFamily: 'Poppins',
    },
    body1: {
      fontFamily: 'Poppins',
    },
    overline: {
      fontFamily: 'Poppins',
      color: '#818181',
      fontSize: '15pt',
    },
    subtitle1: {
      fontFamily: 'Segoe UI',
      fontSize: '15pt',
      color: '#818181',
      lineHeight: 1.2,
    },
    h6: {
      fontWeight: 600,
      color: '#333',
    },
  },
  palette: {
    // @ts-ignore
    primary: {
      main: '#FFF',
    },
    secondary: { main: '#FAFC6D' },
    info: {
      light: '#FFF',
      main: '#FFF',
      dark: '#4a4a4a',
    },
    // @ts-ignore
    textColor: {
      subtext: '#818181',
      main: '#FFF',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        backgroundColor: 'transparent',
      },
      text: {
        backgroundColor: 'transparent',
      },
    },
    MuiIconButton: {
      root: {
        backgroundColor: 'transparent',
      },
    },
  },
});

// axios.defaults.retry = 3;
// axios.defaults.retryDelay = 1000;

const generateClassName = createGenerateClassName({
  productionPrefix: 'myclasses-',
});
// @ts-ignore
const MyApp = ({ Component, pageProps }) => {
  const [key, setKey] = React.useState(0);
  const router = useRouter();
  const [needToolBar, setNeedToolBar] = useState(true);
  const handleRouteChange = (url: string) => {
    if (url === '/' || url === '') {
      setNeedToolBar(false);
    } else {
      setNeedToolBar(true);
    }
  };

  useEffect(() => {
    if (router.route === '/' || router.route === '') {
      setNeedToolBar(false);
    } else {
      setNeedToolBar(true);
    }
    router.events.on('routeChangeComplete', handleRouteChange);
    setKey(1);
  }, []);

  return (
    <StylesProvider key={key} generateClassName={generateClassName}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout needToolBar={needToolBar}>
            {needToolBar && <Toolbar />}
            <Component key={key} {...pageProps} />
            <SnackBar />
          </Layout>
        </ThemeProvider>
      </Provider>
    </StylesProvider>
  );
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
