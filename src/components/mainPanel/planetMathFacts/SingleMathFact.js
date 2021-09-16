import React from 'react';
import styled from 'styled-components';

const StyledSingleFact = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-transform: uppercase;

  @media (min-width: 768px) {
    height: 100%;
    flex-basis: 164px;
    flex-direction: column;
    padding: 17.5px 16px;
    align-items: flex-start;
  }

  @media (min-width: 1440px) {
    flex-basis: 255px;
    padding: 20px 23px;
  }
`;

const StyledFactName = styled.p`
  font-size: 0.8rem;
  line-height: 1.6rem;
  font-weight: bold;
  letter-spacing: 0.07rem;
  opacity: 0.5;

  @media (min-width: 1440px) {
    font-size: 1.1rem;
    line-height: 2.5rem;
  }
`;

const StyledFactValue = styled.p`
  font-family: 'Antonio';
  font-size: 2rem;
  line-height: 2.6rem;
  letter-spacing: -0.08rem;

  @media (min-width: 768px) {
    font-size: 2.4rem;
    line-height: 3.1rem;
  }

  @media (min-width: 1440px) {
    font-size: 4rem;
    line-height: 5.2rem;
  }
`;

const SingleFact = ({ factName, value }) => {
  return (
    <StyledSingleFact>
      <StyledFactName>{factName}</StyledFactName>
      <StyledFactValue>{value}</StyledFactValue>
    </StyledSingleFact>
  );
};

export default SingleFact;
