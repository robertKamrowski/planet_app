import React from 'react';
import styled from 'styled-components';
import SingleFact from './SingleMathFact';

const MathFactsWrapper = styled.section`
  height: 20px;
  position: absolute;
  top: 618px;
  left: 24px;
  width: 327px;
  height: 216px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 28px;
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
