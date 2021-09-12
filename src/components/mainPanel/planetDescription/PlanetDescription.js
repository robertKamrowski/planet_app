import React from 'react';
import styled from 'styled-components';
import { Route, Switch, useRouteMatch } from 'react-router';
import Title from './Title';
import Description from './Description';
import SourceLink from './SourceLink';

const StyledSection = styled.section`
  width: 327px;
  position: absolute;
  top: 355px;
  left: 24px;
  display: flex;
  flex-direction: column;
  min-height: 235px;
  align-items: center;
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
