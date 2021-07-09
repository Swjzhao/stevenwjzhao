import './index.css';

import { CssBaseline } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
// eslint-disable-next-line
const theme = createTheme({
  typography: {
    fontFamily: 'Open Sans',
    h6: {
      fontWeight: 600,
      color: '#333',
    },
  },
  palette: {
    primary: {
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

ReactDOM.render(

  <Provider store={store}>

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
