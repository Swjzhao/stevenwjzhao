import '../index.css';

import { CssBaseline } from '@material-ui/core';
import {
  createGenerateClassName,
  createTheme,
  StylesProvider,
  ThemeProvider,
} from '@material-ui/core/styles';
import { createWrapper } from 'next-redux-wrapper';
import React from 'react';
import { Provider } from 'react-redux';

import Layout from '../components/global/Layout';
import store from '../store';

const theme = createTheme({

  typography: {
    fontFamily: 'Open Sans',
    h6: {
      fontWeight: 600,
      color: '#333',
    },
  },
  palette: {
    // @ts-ignore
    info: {
      light: '#FFF',
      main: '#FFF',
      dark: '#4a4a4a',
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

  React.useEffect(() => {
    setKey(1);
  }, []);

  return (

     <StylesProvider key={key} generateClassName={generateClassName}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component key={key} {...pageProps} />
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

export default wrapper.withRedux((MyApp));
