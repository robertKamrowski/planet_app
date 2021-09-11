import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation, useRouteMatch } from 'react-router';
import { AppContext } from '../../providers/AppProvider';
import PlanetButtons from './PlanetButtons';

const MainPanelWrapper = styled.main``;

const MainPlanetPanel = () => {
  const { planetsData, currentPlanet, setCurrentPlanet } =
    useContext(AppContext);

  const { url } = useRouteMatch();
  let planetName = url.replace('/', '');
  planetName = planetName.charAt(0).toUpperCase() + planetName.slice(1);

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
      <p>{currentPlanet.name}</p>
      <p>{currentPlanet.overview.source}</p>
    </MainPanelWrapper>
  );
};

export default MainPlanetPanel;
