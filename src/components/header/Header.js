import React from 'react';
import styled from 'styled-components';
import BurgerIcon from './BurgerMenu';
import Menu from './menu/Menu';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background-color: ${(p) => p.theme.black};
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
