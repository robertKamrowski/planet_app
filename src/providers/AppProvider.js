import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import planetsData from '../assets/data.json';
import GlobalStyles from '../globals/GlobalStyles';

export const AppContext = createContext();

const theme = {
  white: '#FFFFFF',
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

const AppProvider = ({ children }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [currentPlanet, setCurrentPlanet] = useState(planetsData[2]);

  const toggleMenuOpen = () => {
    setIsMenuOpened((prevIsMenuOpened) => !prevIsMenuOpened);
  };

  const value = {
    planetsData,
    isMenuOpened,
    toggleMenuOpen,
    currentPlanet,
    setCurrentPlanet,
  };
  return (
    <AppContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default AppProvider;
