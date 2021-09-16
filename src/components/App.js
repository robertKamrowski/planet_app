import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header/Header';
import MainPlanetPanel from './mainPanel/MainPlanetPanel';
import MainPanelStarter from './mainPanel/MainPanelStarter';

const AppWrapper = styled.div`
  /* min-height: 950px; */
  min-height: 100vh;
`;

const App = () => {
  return (
    <AppWrapper>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={MainPanelStarter} />
          <Route path="/earth" component={MainPlanetPanel} />
          <Route path="/mercury" component={MainPlanetPanel} />
          <Route path="/venus" component={MainPlanetPanel} />
          <Route path="/mars" component={MainPlanetPanel} />
          <Route path="/jupiter" component={MainPlanetPanel} />
          <Route path="/saturn" component={MainPlanetPanel} />
          <Route path="/uranus" component={MainPlanetPanel} />
          <Route path="/neptune" component={MainPlanetPanel} />
        </Switch>
      </Router>
    </AppWrapper>
  );
};

export default App;
