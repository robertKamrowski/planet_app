import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ArrowIcon from './Arrow';
import Line from '../../Line';
import { AppContext } from '../../../providers/AppProvider';

const StyledMenu = styled.menu`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 531px;
  top: 69px;
  left: 0px;
  right: 0px;
  padding: 44px 24px 0 24px;
  background-size: cover;
  transition: 0.3s;
  transform: ${(p) => (p.isOpened ? 'scale(1)' : 'scale(0)')};

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    position: unset;
    transform: scale(1);
    height: 25px;
    width: 100%;
    transition: unset;
    padding: 0;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  position: relative;
  height: 40px;
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
  transform: translateY(-50%);
  border-radius: 50%;
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
  transform: translateY(-45%);
  line-height: 2.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Spartan';
  color: ${(p) => p.theme.white};
  letter-spacing: 0.13rem;
  font-style: normal;

  @media (min-width: 768px) {
    position: unset;
    top: unset;
    left: unset;
    transform: unset;
    opacity: 0.75;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
  }
`;

const Menu = () => {
  const { isMenuOpened, toggleMenuOpen } = useContext(AppContext);

  return (
    <StyledMenu isOpened={isMenuOpened}>
      <StyledNavLink to="/mercury" onClick={toggleMenuOpen}>
        <Circle color="#DEF4FC" />
        <PlanetName>mercury</PlanetName>
        <ArrowIcon />
      </StyledNavLink>
      <Line />

      <StyledNavLink to="/venus" onClick={toggleMenuOpen}>
        <Circle color="#F7CC7F" />
        <PlanetName>venus</PlanetName>
        <ArrowIcon />
      </StyledNavLink>
      <Line />

      <StyledNavLink to="/" onClick={toggleMenuOpen}>
        <Circle color="#545BFE" />
        <PlanetName>earth</PlanetName>
        <ArrowIcon />
      </StyledNavLink>
      <Line />

      <StyledNavLink to="/mars" onClick={toggleMenuOpen}>
        <Circle color="#FF6A45" />
        <PlanetName>mars</PlanetName>
        <ArrowIcon />
      </StyledNavLink>
      <Line />

      <StyledNavLink to="/jupiter" onClick={toggleMenuOpen}>
        <Circle color="#ECAD7A" />
        <PlanetName>jupiter</PlanetName>
        <ArrowIcon />
      </StyledNavLink>
      <Line />

      <StyledNavLink to="/saturn" onClick={toggleMenuOpen}>
        <Circle color="#FCCB6B" />
        <PlanetName>saturn</PlanetName>
        <ArrowIcon />
      </StyledNavLink>
      <Line />

      <StyledNavLink to="/uranus" onClick={toggleMenuOpen}>
        <Circle color="#65F0D5" />
        <PlanetName>uranus</PlanetName>
        <ArrowIcon />
      </StyledNavLink>
      <Line />

      <StyledNavLink to="/neptune" onClick={toggleMenuOpen}>
        <Circle color="#497EFA" />
        <PlanetName>neptune</PlanetName>
        <ArrowIcon />
      </StyledNavLink>
    </StyledMenu>
  );
};

export default Menu;
