import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import SingleButtonContent from './SingleButtonContent';

const Wrapper = styled.menu`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  @media (min-width: 768px) {
    width: 36.5%;
    height: 152px;
    flex-direction: column;
    justify-content: space-between;
    margin: 56px 40px auto auto;
    border-bottom: none;
  }

  @media (min-width: 1440px) {
    width: 350px;
    max-width: 350px;
    height: 176px;
    position: absolute;
    top: 456px;
    right: 0;
    margin: 0;
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
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 7.5px 20px;

    &.active {
      background-color: ${(p) => p.theme[p.color]};
      border-bottom: none;
    }
  }

  @media (min-width: 1440px) {
    height: 48px;
    font-size: 1.2rem;
    letter-spacing: 0.25rem;
    transition: 0.3s;

    &:hover:not(.active) {
      background-color: rgba(216, 216, 216, 0.4);
      opacity: 1;
    }
  }
`;

const StyledNumber = styled.span`
  display: none;

  @media (min-width: 768px) {
    display: block;
    margin-right: 17px;
  }
  @media (min-width: 1440px) {
    margin-right: 25px;
  }
`;

const PlanetDetailsButtons = () => {
  let { url } = useRouteMatch();
  const getPlanetColor = (planetName) => planetName.slice(1);

  return (
    <Wrapper>
      <StyledNavLink color={getPlanetColor(url)} to={`${url}/overview`}>
        <StyledNumber>01</StyledNumber>
        <SingleButtonContent content="Overview" longContent="Overview" />
      </StyledNavLink>
      <StyledNavLink color={getPlanetColor(url)} to={`${url}/structure`}>
        <StyledNumber>02</StyledNumber>
        <SingleButtonContent
          content="Structure"
          longContent="Internal Structure"
        />
      </StyledNavLink>
      <StyledNavLink color={getPlanetColor(url)} to={`${url}/surface`}>
        <StyledNumber>03</StyledNumber>
        <SingleButtonContent content="Surface" longContent="Surface Geology" />
      </StyledNavLink>
    </Wrapper>
  );
};

export default PlanetDetailsButtons;
