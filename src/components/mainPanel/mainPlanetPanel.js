import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router';
import { AppContext } from '../../providers/AppProvider';
import PlanetButtons from './PlanetButtons';

const MainPanelWrapper = styled.main``;

const MainPlanetPanel = () => {
  const { planetsData, currentPlanet, setCurrentPlanet } =
    useContext(AppContext);

  const location = useLocation();
  console.log(location.pathname);
  let planetName = location.pathname.replace('/', '');
  planetName = planetName.charAt(0).toUpperCase() + planetName.slice(1);
  console.log(planetName);

  useEffect(() => {
    for (let i = 0; i < planetsData.length; i++) {
      if (planetsData[i].name === planetName) {
        setCurrentPlanet(planetsData[i]);
      }
    }
  }, [planetName]);

  return (
    <MainPanelWrapper>
      <PlanetButtons />
      <h1>{currentPlanet.name}</h1>
      <p>{currentPlanet.overview.content}</p>
      <p>{currentPlanet.overview.source}</p>
    </MainPanelWrapper>
  );
};

export default MainPlanetPanel;
