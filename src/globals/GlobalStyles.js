import { createGlobalStyle } from 'styled-components';
import backgroundStars from '../assets/background-stars.svg';

const GlobalStyle = createGlobalStyle`
  *, *::after,*::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 10px;
  } 

  html{
    background-color: ${(p) => p.theme.black};
    background-image: url(${backgroundStars});
    background-position: center;
    background-size: cover;
  }

  body{
    font-family: 'Spartan', sans-serif; 
    font-size: 1.4rem;
    line-height: 2.5rem;
    color: ${(p) => p.theme.white};
  }

  h1{
    font-family: 'Antonio', sans-serif;
    font-size: 8rem;
    line-height: 10.4rem;
    font-weight: 500;
  }

  h2{
    font-family: 'Antonio', sans-serif;
    font-size: 4rem;
    line-height: 5.2rem;
    font-weight: 500;
    letter-spacing: -0.15rem;
  }

  h3{
    font-family: 'Spartan', sans-serif;
    font-size: 1.2rem;
    line-height: 2.5rem;
    font-weight: 700;
    letter-spacing: 0.26rem;

  }
  h4{
    font-family: 'Spartan', sans-serif;
    font-size: 1.1rem;
    line-height: 2.5rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
  }
`;

export default GlobalStyle;
