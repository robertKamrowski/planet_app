import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import AppProvider from './providers/AppProvider';

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);
