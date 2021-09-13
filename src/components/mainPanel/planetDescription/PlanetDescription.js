import React from 'react';
import styled from 'styled-components';
import { Route, Switch, useRouteMatch } from 'react-router';
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
