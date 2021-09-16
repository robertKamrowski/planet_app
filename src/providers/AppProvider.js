import React, { createContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import planetsData from '../assets/data.json';
import GlobalStyles from '../globals/GlobalStyles';

export const AppContext = createContext();

const theme = {
  white: '#FFFFFF',
  black: '#070724',
  darkGrey: '#38384F',
  lightGrey: '#838391',
  mercury: '#419EBB',
  venus: '#EDA249',
  earth: '#6D2ED5',
  mars: '#D14C32',
  jupiter: '#D83A34',
  saturn: '#CD5120',
  uranus: '#1EC1A2',
  neptune: '#2D68F0',
};

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // handler to set window width value:
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial function call, so state gets updated with initial window size
    handleResize();

    // event listener on window:
    window.addEventListener('resize', handleResize);

    // Clean up the listener:
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}

const AppProvider = ({ children }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [currentPlanet, setCurrentPlanet] = useState(planetsData[0]);

  const toggleMenuOpen = () => {
    setIsMenuOpened((prevIsMenuOpened) => !prevIsMenuOpened);
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  const value = {
    planetsData,
    isMenuOpened,
    toggleMenuOpen,
    currentPlanet,
    setCurrentPlanet,
    useWindowWidth,
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
