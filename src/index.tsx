import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import App from './App';
import reportWebVitals from './reportWebVitals';

import ErrorBoundary from './components/ErrorBoundary';
import { DefaultTheme, ThemeProvider } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    black: '#333',
    white: '#fff',

    dark: '#555',
    darkHover: '#636363',

    light: '#f2f2f2',
    lightHover: '#e4e4e4',

    alt: '#78abf7',
  }
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
