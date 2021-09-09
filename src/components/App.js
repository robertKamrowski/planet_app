import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  color: ${(p) => p.theme.blue};
`;

const App = () => {
  return <H1>planet app</H1>;
};

export default App;
