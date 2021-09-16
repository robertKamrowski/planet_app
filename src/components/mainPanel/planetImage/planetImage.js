import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { Switch, Route, useRouteMatch } from 'react-router';
import { AppContext } from '../../../providers/AppProvider';

const PlanetImageWrapper = styled.section`
  width: 100%;
  min-height: 304px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (min-width: 768px) {
    order: -1;
    min-height: 460px;
  }

  @media (min-width: 1440px) {
    width: calc(100% - 350px);
    position: absolute;
    top: 70px;
    left: 0;
    margin: 0;
    padding: 0;
    order: unset;
  }
`;

const StyledPlanetImage = styled.img`
  width: ${(p) => `${p.imageWidth}px`};
  display: block;
  position: relative;
`;

const StyledPlanetGeology = styled.img`
  display: block;
  width: ${(p) => `${p.imageWidth}px`};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
`;

const handleImgSize = (url, windowWidth) => {
  let output;
  if (url === '/mercury') {
    if (windowWidth < 768) {
      output = 111;
    } else if (windowWidth < 1440) {
      output = 184;
    } else output = 290;
  } else if (url === '/venus') {
    if (windowWidth < 768) {
      output = 154;
    } else if (windowWidth < 1440) {
      output = 253;
    } else output = 400;
  } else if (url === '/earth') {
    if (windowWidth < 768) {
      output = 173;
    } else if (windowWidth < 1440) {
      output = 285;
    } else output = 450;
  } else if (url === '/mars') {
    if (windowWidth < 768) {
      output = 129;
    } else if (windowWidth < 1440) {
      output = 213;
    } else output = 336;
  } else if (url === '/jupiter') {
    if (windowWidth < 768) {
      output = 224;
    } else if (windowWidth < 1440) {
      output = 369;
    } else output = 582;
  } else if (url === '/saturn') {
    if (windowWidth < 768) {
      output = 256;
    } else if (windowWidth < 1440) {
      output = 422;
    } else output = 666;
  } else if (url === '/uranus') {
    if (windowWidth < 768) {
      output = 176;
    } else if (windowWidth < 1440) {
      output = 290;
    } else output = 458;
  } else if (url === '/neptune') {
    if (windowWidth < 768) {
      output = 173;
    } else if (windowWidth < 1440) {
      output = 285;
    } else output = 450;
  } else {
    // geology img  width
    if (windowWidth < 768) {
      output = 80;
    } else if (windowWidth < 1440) {
      output = 120;
    } else output = 160;
  }

  return output;
};

const PlanetImage = ({
  currentPlanet: {
    images: { planet, internal, geology },
  },
}) => {
  const { useWindowWidth } = useContext(AppContext);
  const windowWidth = useWindowWidth();
  const { url } = useRouteMatch();

  return (
    <PlanetImageWrapper>
      <Switch>
        <Route path={`${url}/overview`}>
          <StyledPlanetImage
            src={planet}
            imageWidth={handleImgSize(url, windowWidth)}
            alt="Image of a planet."
          />
        </Route>

        <Route path={`${url}/structure`}>
          <StyledPlanetImage
            src={internal}
            imageWidth={handleImgSize(url, windowWidth)}
            alt="Image of structure of a planet."
          />
        </Route>

        <Route path={`${url}/surface`}>
          <StyledPlanetImage
            src={planet}
            imageWidth={handleImgSize(url, windowWidth)}
            alt="Image of structure of a planet."
          />
          <StyledPlanetGeology
            src={geology}
            alt="geology of a planet"
            imageWidth={handleImgSize(undefined, windowWidth)}
          />
        </Route>
      </Switch>
    </PlanetImageWrapper>
  );
};

export default PlanetImage;
