import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router';
import { AppContext } from '../../providers/AppProvider';

const MainPanelWrapper = styled.main``;

const MainPlanetPanel = () => {
  const { planetsData, currentPlanet, setCurrentPlanet } =
    useContext(AppContext);

  const location = useLocation();
  let planetName = location.pathname.replace('/', '');
  planetName = planetName.charAt(0).toUpperCase() + planetName.slice(1);

  useEffect(() => {
    for (let i = 0; i < planetsData.length; i++) {
      if (planetsData[i].name === planetName) {
        setCurrentPlanet(planetsData[i]);
      }
    }
  }, []);

  return <MainPanelWrapper></MainPanelWrapper>;
};

export default MainPlanetPanel;
