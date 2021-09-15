import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

const MenuWrapper = styled.menu`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  @media (min-width: 768px) {
    flex-direction: column;
    width: 36.5%;
    height: 152px;
    border-bottom: none;
    margin: 56px 40px auto auto;
    justify-content: space-between;
  }
`;

const StyledNavLink = styled(NavLink)`
  font-size: 0.9rem;
  line-height: 50px;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  opacity: 0.5;
  padding: 0 5px;
  color: ${(p) => p.theme.white};

  &.active {
    opacity: 1;
    border-bottom: 4px solid ${(p) => p.theme[p.color]};
  }

  @media (min-width: 768px) {
    height: 40px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    padding: unset;
    /* line-height: 2.5rem; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 7.5px 20px;

    &.active {
      background-color: ${(p) => p.theme[p.color]};
    }
  }
`;

const StyledNumber = styled.span`
  display: none;

  @media (min-width: 768px) {
    display: block;
    margin-right: 17px;
  }
`;

const PlanetDetailsButtons = () => {
  let { url } = useRouteMatch();
  const getPlanetColor = (planetName) => planetName.slice(1);

  return (
    <MenuWrapper>
      <StyledNavLink color={getPlanetColor(url)} to={`${url}/overview`}>
        <StyledNumber>01</StyledNumber>
        Overview
      </StyledNavLink>
      <StyledNavLink color={getPlanetColor(url)} to={`${url}/structure`}>
        <StyledNumber>02</StyledNumber>
        Structure
      </StyledNavLink>
      <StyledNavLink color={getPlanetColor(url)} to={`${url}/surface`}>
        <StyledNumber>03</StyledNumber>
        Surface
      </StyledNavLink>
    </MenuWrapper>
  );
};

export default PlanetDetailsButtons;
