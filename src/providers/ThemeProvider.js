import React, { createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import planetsData from '../assets/data.json';
import GlobalStyles from '../globals/GlobalStyles';

export const AppContext = createContext();

const theme = {
  bialy: '#FFFFFF',
  black: '#070724',
  darkGrey: '#38384F',
  lightGrey: '#838391',
  blueish: '#419EBB',
  orange: '#EDA249',
  purple: '#6D2ED5',
  darkOrange: '#D14C32',
  red: '#D83A34',
  lightBrown: '#CD5120',
  greenish: '#1EC1A2',
  blue: '#2D68F0',
};

const value = { planetsData };

const ThemeProviderWrapper = ({ children }) => {
  return (
    <AppContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default ThemeProviderWrapper;
