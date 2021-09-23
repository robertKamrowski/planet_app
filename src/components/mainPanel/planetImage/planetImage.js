import React, { useContext } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router';
import { useRouteMatch } from 'react-router';
import { AppContext } from '../../../providers/AppProvider';

// planets imgs:
import Mercury from '../../../assets/planet-mercury.svg';
import Venus from '../../../assets/planet-venus.svg';
import Earth from '../../../assets/planet-earth.svg';
import Mars from '../../../assets/planet-mars.svg';
import Jupiter from '../../../assets/planet-jupiter.svg';
import Saturn from '../../../assets/planet-saturn.svg';
import Uranus from '../../../assets/planet-uranus.svg';
import Neptune from '../../../assets/planet-neptune.svg';
// internals structure imgs:
import MercuryInternal from '../../../assets/planet-mercury-internal.svg';
import VenusInternal from '../../../assets/planet-venus-internal.svg';
import EarthInternal from '../../../assets/planet-earth-internal.svg';
import MarsInternal from '../../../assets/planet-mars-internal.svg';
import JupiterInternal from '../../../assets/planet-jupiter-internal.svg';
import SaturnInternal from '../../../assets/planet-saturn-internal.svg';
import UranusInternal from '../../../assets/planet-uranus-internal.svg';
import NeptuneInternal from '../../../assets/planet-neptune-internal.svg';
// planets geology:
import MercuryGeology from '../../../assets/geology-mercury.png';
import VenusGeology from '../../../assets/geology-venus.png';
import EarthGeology from '../../../assets/geology-earth.png';
import MarsGeology from '../../../assets/geology-mars.png';
import JupiterGeology from '../../../assets/geology-jupiter.png';
import SaturnGeology from '../../../assets/geology-saturn.png';
import UranusGeology from '../../../assets/geology-uranus.png';
import NeptuneGeology from '../../../assets/geology-neptune.png';

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
  width: ${({ imageWidth }) => `${imageWidth}px`};
  display: block;
  position: relative;
`;

const StyledPlanetGeology = styled.img`
  display: block;
  width: ${({ imageWidth }) => `${imageWidth}px`};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
`;

// Returns property img size depends on screen width dynamically:
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

// Imported planets to use:
const importedPlanets = {
  planet: [Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune],
  internal: [
    MercuryInternal,
    VenusInternal,
    EarthInternal,
    MarsInternal,
    JupiterInternal,
    SaturnInternal,
    UranusInternal,
    NeptuneInternal,
  ],
  geology: [
    MercuryGeology,
    VenusGeology,
    EarthGeology,
    MarsGeology,
    JupiterGeology,
    SaturnGeology,
    UranusGeology,
    NeptuneGeology,
  ],
};

const PlanetImage = () => {
  const { useWindowWidth, planetsData } = useContext(AppContext);
  const windowWidth = useWindowWidth();
  const { url } = useRouteMatch();

  // Returns property img depends on url and path
  const getPlanetImg = (url, path) => {
    let planetName = url.replace('/', '');
    planetName = planetName.charAt(0).toUpperCase() + planetName.slice(1);

    for (let i = 0; i < planetsData.length; i++) {
      if (path === `${url}/overview`) {
        if (planetName === planetsData[i].name)
          return importedPlanets.planet[i];
      } else if (path === `${url}/structure`) {
        if (planetName === planetsData[i].name)
          return importedPlanets.internal[i];
      } else if (path === `${url}/surface`) {
        if (planetName === planetsData[i].name)
          return importedPlanets.planet[i];
      } else {
        if (planetName === planetsData[i].name)
          return importedPlanets.geology[i];
      }
    }
  };

  return (
    <PlanetImageWrapper>
      <Switch>
        <Route path={`${url}/overview`}>
          <StyledPlanetImage
            src={getPlanetImg(url, `${url}/overview`)}
            imageWidth={handleImgSize(url, windowWidth)}
            alt="Image of a planet."
          />
        </Route>
        <Route path={`${url}/structure`}>
          <StyledPlanetImage
            src={getPlanetImg(url, `${url}/structure`)}
            imageWidth={handleImgSize(url, windowWidth)}
            alt="Image of structure of a planet."
          />
        </Route>
        <Route path={`${url}/surface`}>
          <StyledPlanetImage
            src={getPlanetImg(url, `${url}/surface`)}
            imageWidth={handleImgSize(url, windowWidth)}
            alt="Image of structure of a planet."
          />
          <StyledPlanetGeology
            src={getPlanetImg(url, 'geology')}
            alt="geology of a planet"
            imageWidth={handleImgSize(undefined, windowWidth)}
          />
        </Route>
      </Switch>
    </PlanetImageWrapper>
  );
};

export default PlanetImage;
