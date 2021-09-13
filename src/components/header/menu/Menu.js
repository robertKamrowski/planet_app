import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ArrowIcon from './Arrow';
import Line from '../../Line';
import { AppContext } from '../../../providers/AppProvider';

const StyledMenu = styled.menu`
  width: 100%;
  height: calc(100% - 69px);
  position: fixed;
  top: 69px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px 24px;
  transition: 0.4s;
  transform: ${(p) => (p.isOpened ? 'scale(1)' : 'scale(0)')};
  /* background-color: ${(p) => p.theme.black}; */

  @media (min-width: 768px) {
    width: 100%;
    height: 25px;
    position: unset;
    display: flex;
    flex-direction: row;
    padding: 0;
    transform: scale(1);
    transition: unset;
  }
`;

const StyledNavLink = styled(NavLink)`
  height: 40px;
  position: relative;
  display: block;
  list-style: none;
  text-decoration: none;

  @media (min-width: 768px) {
    position: unset;
    height: unset;
  }
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  border-radius: 50%;
  transform: translateY(-50%);
  background-color: ${(p) => p.color};

  @media (min-width: 768px) {
    display: none;
  }
`;

const PlanetName = styled.span`
  display: block;
  position: absolute;
  left: 45px;
  top: 50%;
  font-family: 'Spartan';
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2.5rem;
  text-transform: uppercase;
  color: ${(p) => p.theme.white};
  letter-spacing: 0.13rem;
  transform: translateY(-45%);

  @media (min-width: 768px) {
    position: unset;
    top: unset;
    left: unset;
    opacity: 0.75;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    transform: unset;
  }
`;

const Menu = () => {
  const { isMenuOpened, toggleMenuOpen } = useContext(AppContext);

  return (
    <StyledMenu isOpened={isMenuOpened}>
      <StyledNavLink to="/mercury/overview" onClick={toggleMenuOpen}>
        <Circle color="#DEF4FC" />
        <PlanetName>mercury</PlanetName>
        <ArrowIcon />
      </StyledNavLink>
      <Line />

      <StyledNavLink to="/venus/overview" onClick={toggleMenuOpen}>
        <Circle color="#F7CC7F" />
        <PlanetName>venus</PlanetName>
        <ArrowIcon />
      </StyledNavLink>
      <Line />

      <StyledNavLink to="/earth/overview" onClick={toggleMenuOpen}>
        <Circle color="#545BFE" />
        <PlanetName>earth</PlanetName>
        <ArrowIcon />
      </StyledNavLink>
      <Line />

      <StyledNavLink to="/mars/overview" onClick={toggleMenuOpen}>
        <Circle color="#FF6A45" />
        <PlanetName>mars</PlanetName>
        <ArrowIcon />
      </StyledNavLink>
      <Line />

      <StyledNavLink to="/jupiter/overview" onClick={toggleMenuOpen}>
        <Circle color="#ECAD7A" />
        <PlanetName>jupiter</PlanetName>
        <ArrowIcon />
      </StyledNavLink>
      <Line />

      <StyledNavLink to="/saturn/overview" onClick={toggleMenuOpen}>
        <Circle color="#FCCB6B" />
        <PlanetName>saturn</PlanetName>
        <ArrowIcon />
      </StyledNavLink>
      <Line />

      <StyledNavLink to="/uranus/overview" onClick={toggleMenuOpen}>
        <Circle color="#65F0D5" />
        <PlanetName>uranus</PlanetName>
        <ArrowIcon />
      </StyledNavLink>
      <Line />

      <StyledNavLink to="/neptune/overview" onClick={toggleMenuOpen}>
        <Circle color="#497EFA" />
        <PlanetName>neptune</PlanetName>
        <ArrowIcon />
      </StyledNavLink>
    </StyledMenu>
  );
};

export default Menu;
