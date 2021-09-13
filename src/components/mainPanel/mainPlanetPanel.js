import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useRouteMatch } from 'react-router';
import { AppContext } from '../../providers/AppProvider';
import PlanetDetailsButtons from './PlanetButtons';
import PlanetDescription from './planetDescription/PlanetDescription';
import MathFacts from './planetMathFacts/MathFacts';
import PlanetImage from './planetImage/planetImage';

const MainPanelWrapper = styled.main`
  min-height: 100%;
  margin: 0 auto;
  padding-bottom: 15px;
`;

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
      <PlanetDetailsButtons />
      <PlanetImage currentPlanet={currentPlanet} />
      <PlanetDescription currentPlanet={currentPlanet} />
      <MathFacts currentPlanet={currentPlanet} />
    </MainPanelWrapper>
  );
};

export default MainPlanetPanel;
