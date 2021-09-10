import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ArrowIcon from './Arrow';
import Line from '../../Line';

const StyledMenu = styled.menu`
  position: fixed;
  height: 531px;
  top: 68px;
  left: 0px;
  right: 0px;
  padding: 44px 24px 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(p) => p.theme.black};
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  position: relative;
  list-style: none;
  height: 40px;
  text-decoration: none;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(p) => p.color};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const PlanetName = styled.span`
  display: block;
  position: absolute;
  left: 45px;
  top: 50%;
  transform: translateY(-45%);
  line-height: 2.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Spartan';
  color: ${(p) => p.theme.white};
  letter-spacing: 0.13rem;
  font-style: normal;
`;

const Menu = () => {
  return (
    <StyledMenu>
      <StyledNavLink to="/mercury">
        <Circle color="#DEF4FC" />
        <PlanetName>mercury</PlanetName>
        <ArrowIcon />
      </StyledNavLink>
      <Line />

      <StyledNavLink to="/venus">
        <Circle color="#F7CC7F" />
        <PlanetName>venus</PlanetName>
        <ArrowIcon />
      </StyledNavLink>
      <Line />

      <StyledNavLink to="/">
        <Circle color="#545BFE" />
        <PlanetName>earth</PlanetName>
        <ArrowIcon />
      </StyledNavLink>
      <Line />

      <StyledNavLink to="/mars">
        <Circle color="#FF6A45" />
        <PlanetName>mars</PlanetName>
        <ArrowIcon />
      </StyledNavLink>
      <Line />

      <StyledNavLink to="/jupiter">
        <Circle color="#ECAD7A" />
        <PlanetName>jupiter</PlanetName>
        <ArrowIcon />
      </StyledNavLink>
      <Line />

      <StyledNavLink to="/saturn">
        <Circle color="#FCCB6B" />
        <PlanetName>saturn</PlanetName>
        <ArrowIcon />
      </StyledNavLink>
      <Line />

      <StyledNavLink to="/uranus">
        <Circle color="#65F0D5" />
        <PlanetName>uranus</PlanetName>
        <ArrowIcon />
      </StyledNavLink>
      <Line />

      <StyledNavLink to="/neptune">
        <Circle color="#497EFA" />
        <PlanetName>neptune</PlanetName>
        <ArrowIcon />
      </StyledNavLink>
    </StyledMenu>
  );
};

export default Menu;
