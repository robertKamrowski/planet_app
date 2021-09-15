import React from 'react';
import styled from 'styled-components';
import SingleFact from './SingleMathFact';

const MathFactsWrapper = styled.section`
  width: 80%;
  height: 216px;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 32px auto;

  @media (min-width: 768px) {
    width: 90%;
    max-width: 100%;
    flex-direction: row;
    height: 88px;
  }
`;

const MathFacts = ({ currentPlanet }) => {
  const { rotation, revolution, radius, temperature } = currentPlanet;

  return (
    <MathFactsWrapper>
      <SingleFact factName={'rotation time'} value={rotation} />
      <SingleFact factName={'revolution time'} value={revolution} />
      <SingleFact factName={'radius'} value={radius} />
      <SingleFact factName={'average temp.'} value={temperature} />
    </MathFactsWrapper>
  );
};

export default MathFacts;
