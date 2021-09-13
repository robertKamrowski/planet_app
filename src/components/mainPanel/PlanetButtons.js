import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

const MenuWrapper = styled.menu`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
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
`;

const PlanetDetailsButtons = () => {
  let { url } = useRouteMatch();
  const getPlanetColor = (planetName) => planetName.slice(1);

  return (
    <MenuWrapper>
      <StyledNavLink color={getPlanetColor(url)} to={`${url}/overview`}>
        Overview
      </StyledNavLink>
      <StyledNavLink color={getPlanetColor(url)} to={`${url}/structure`}>
        Structure
      </StyledNavLink>
      <StyledNavLink color={getPlanetColor(url)} to={`${url}/surface`}>
        Surface
      </StyledNavLink>
    </MenuWrapper>
  );
};

export default PlanetDetailsButtons;
