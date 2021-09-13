import React from 'react';
import styled from 'styled-components';
import BurgerIcon from './BurgerMenu';
import Menu from './menu/Menu';

const StyledHeader = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background-color: ${(p) => p.theme.black};
  z-index: 999;

  @media (min-width: 768px) {
    height: 158px;
    padding: 32px 51.5px 27px 51.5px;
    flex-direction: column;
    background-color: transparent;
  }
`;

const StyledTitle = styled.h1`
  font-size: 2.8rem;
  line-height: 3.6rem;
  text-transform: uppercase;
  letter-spacing: -0.105rem;
`;

const Header = () => {
  return (
    <>
      <StyledHeader>
        <StyledTitle>The planets</StyledTitle>
        <BurgerIcon />
        <Menu />
      </StyledHeader>
    </>
  );
};

export default Header;
