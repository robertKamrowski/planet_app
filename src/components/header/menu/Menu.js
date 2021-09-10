import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ArrowIcon from './Arrow';
import Line from '../../Line';
import { AppContext } from '../../../providers/AppProvider';
import backgroundStars from '../../../assets/background-stars.svg';

const StyledMenu = styled.menu`
  position: fixed;
  height: 531px;
  top: 69px;
  left: 0px;
  right: 0px;
  padding: 44px 24px 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(p) => p.theme.black};
  background-image: url(${backgroundStars});
  background-size: cover;
  transition: 0.3s;
  transform: ${(p) => (p.isOpened ? 'scale(1)' : 'scale(0)')};
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
