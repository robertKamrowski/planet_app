import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GlobalStyles from './globals/GlobalStyles';
import ThemeProviderWrapper from './providers/ThemeProvider';

ReactDOM.render(
  <ThemeProviderWrapper>
    <GlobalStyles />
    <App />
  </ThemeProviderWrapper>,
  document.getElementById('root')
);
