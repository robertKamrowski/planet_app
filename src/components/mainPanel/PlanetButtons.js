import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

const MenuWrapper = styled.menu``;

const PlanetButtons = () => {
  let { url } = useRouteMatch();

  return (
    <MenuWrapper>
      <NavLink to={`${url}`}>Overview</NavLink>
      <NavLink to={`${url}/structure`}>Structure</NavLink>
      <NavLink to={`${url}/surface`}>Surface</NavLink>
    </MenuWrapper>
  );
};

export default PlanetButtons;
