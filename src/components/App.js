import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './header/Header';

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
      </Router>
      <div>planets content there</div>
    </AppWrapper>
  );
};

export default App;
