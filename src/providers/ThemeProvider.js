import { ThemeProvider } from 'styled-components';

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

const ThemeProviderWrapper = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderWrapper;
