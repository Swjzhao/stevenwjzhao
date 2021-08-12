import '../index.css';

import { CssBaseline, Toolbar } from '@material-ui/core';
import {
  createGenerateClassName,
  createTheme,
  responsiveFontSizes,
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

const defaultTheme = createTheme();
let theme = createTheme({
  typography: {
    // fontFamily: 'Open Sans',
    h1: {
      fontFamily: 'Poppins',
      fontWeight: 700,
      fontSize: '60pt',
    },
    h2: {
      fontFamily: 'Poppins',
      fontWeight: 'bold',
    },
    h4: {
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
    subtitle2: {
      fontFamily: 'Poppins',
      fontSize: '12pt',
    },
    h6: {
      fontFamily: 'Poppins',
      fontWeight: 600,
      color: '#333',
    },
  },
  palette: {
    type: 'dark',
    // @ts-ignore
    primary: {
      main: '#FFF',
    },
    secondary: { main: '#FAFB69' },
    info: {
      light: '#FFF',
      main: '#FFF',
      dark: '#4a4a4a',
    },
    // @ts-ignore
    textColor: {
      subtext: '#818181',
      main: '#FFF',
      light: '#B8B8B8',
    },
    // @ts-ignore
    backgroundColors: {
      card: '#292929',
      main: '#171717',
      light: '#1E1E1E',
      button: 'linear-gradient(#FAFB69, #949501)',
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
    MuiToolbar: {
      root: {
        transition: defaultTheme.transitions.create(['height', 'min-height'], {
          duration: defaultTheme.transitions.duration.standard,
        }),
        [defaultTheme.breakpoints.up('sm')]: {
          minHeight: '80px !important',
        },
      },
    },
  },
});
theme = responsiveFontSizes(theme);
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
    console.log(url);
    if (url === '/' || url === '' || url === '/about') {
      setNeedToolBar(false);
    } else {
      setNeedToolBar(true);
    }
  };

  useEffect(() => {
    if (router.route === '/' || router.route === '' || router.route === '/about') {
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
