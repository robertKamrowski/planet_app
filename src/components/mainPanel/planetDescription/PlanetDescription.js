import React from 'react';
import styled from 'styled-components';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Title from './Title';
import Description from './Description';
import SourceLink from './SourceLink';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 235px;
  width: 80%;
  margin: 15px auto;

  @media (min-width: 768px) {
    width: 339px;
    min-height: 253px;
    height: 280px;
    margin: -208px auto auto 39px;
    align-items: flex-start;
  }

  @media (min-width: 1440px) {
    width: 350px;
    height: initial;
    position: absolute;
    top: 70px;
    right: 0;
    margin: 0;
    padding: 0;
  }
`;

const PlanetDescription = ({ currentPlanet }) => {
  const { url } = useRouteMatch();
  const { overview, structure, geology, name } = currentPlanet;

  return (
    <StyledSection>
      <Title planetName={name} />
      <Switch>
        <Route path={`${url}/overview`}>
          <Description content={overview.content} />
          <SourceLink source={overview.source} />
        </Route>
        <Route path={`${url}/structure`}>
          <Description content={structure.content} />
          <SourceLink source={structure.source} />
        </Route>
        <Route path={`${url}/surface`}>
          <Description content={geology.content} />
          <SourceLink source={geology.source} />
        </Route>
      </Switch>
    </StyledSection>
  );
};

export default PlanetDescription;
