import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useRouteMatch } from 'react-router-dom';
import { AppContext } from '../../providers/AppProvider';
import PlanetDetailsButtons from './featureButtons/PlanetButtons';
import PlanetDescription from './planetDescription/PlanetDescription';
import MathFacts from './planetMathFacts/MathFacts';
import PlanetImage from './planetImage/PlanetImage';

const MainPanelWrapper = styled.main`
  min-height: 100%;
  margin: 0 auto;
  padding-bottom: 15px;
  transition: 0.4s;
  transform: ${(p) => (p.menuOpened ? `scale(0)` : 'scale(1)')};

  @media (min-width: 768px) {
    transform: scale(1);
    display: flex;
    flex-direction: column;
    max-width: 900px;
    padding: 30px;
  }

  @media (min-width: 1440px) {
    max-width: 1110px;
    min-height: calc(100vh - 85px);
    display: block;
    padding-bottom: 45px;
    position: relative;
  }
`;

const MainPlanetPanel = () => {
  const { planetsData, currentPlanet, setCurrentPlanet, isMenuOpened } =
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
    <MainPanelWrapper menuOpened={isMenuOpened}>
      <PlanetDetailsButtons />
      <PlanetImage currentPlanet={currentPlanet} />
      <PlanetDescription currentPlanet={currentPlanet} />
      <MathFacts currentPlanet={currentPlanet} />
    </MainPanelWrapper>
  );
};

export default MainPlanetPanel;
