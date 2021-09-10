import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './header/Header';
import MainPanel from './mainPanel/mainPlanetPanel';

const AppWrapper = styled.div`
  width: 375px;
  height: 950px;
  width: 100%;
`;

const App = () => {
  return (
    <AppWrapper>
      <Router>
        <Header />
        <Route path="/mercury" component={MainPanel} />
        <Route path="/venus" component={MainPanel} />
        <Route path="/" exact component={MainPanel} />
        <Route path="/mars" component={MainPanel} />
        <Route path="/jupiter" component={MainPanel} />
        <Route path="/saturn" component={MainPanel} />
        <Route path="/uranus" component={MainPanel} />
        <Route path="/neptune" component={MainPanel} />
      </Router>
    </AppWrapper>
  );
};

export default App;
