import React from 'react';
import styled from 'styled-components';
import { Switch, Route, useRouteMatch } from 'react-router';

const PlanetImageWrapper = styled.section`
  width: 100%;
  min-height: 304px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledPlanetImage = styled.img`
  width: ${(p) => `${p.width}px`};
  display: block;
  position: relative;
`;

const StyledPlanetGeology = styled.img`
  display: block;
  width: ${(p) => `${p.width}px`};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
`;

const PlanetImage = ({ currentPlanet }) => {
  const { url } = useRouteMatch();

  let width = 0;

  if (url === '/mercury') {
    width = 111;
  } else if (url === '/venus') {
    width = 154;
  } else if (url === '/earth') {
    width = 173;
  } else if (url === '/mars') {
    width = 129;
  } else if (url === '/jupiter') {
    width = 224;
  } else if (url === '/saturn') {
    width = 256;
  } else if (url === '/uranus') {
    width = 176;
  } else {
    width = 173;
  }
  return (
    <PlanetImageWrapper>
      <Switch>
        <Route path={`${url}/overview`}>
          <StyledPlanetImage
            src={currentPlanet.images.planet}
            width={width}
            alt="Image of a planet."
          />
        </Route>

        <Route path={`${url}/structure`}>
          <StyledPlanetImage
            src={currentPlanet.images.internal}
            width={width}
            alt="Image of structure of a planet."
          />
        </Route>

        <Route path={`${url}/surface`}>
          <StyledPlanetImage
            src={currentPlanet.images.planet}
            width={width}
            alt="Image of structure of a planet."
          />
          <StyledPlanetGeology
            src={currentPlanet.images.geology}
            alt="geology of a planet"
            width={100}
          />
        </Route>
      </Switch>
    </PlanetImageWrapper>
  );
};

export default PlanetImage;
