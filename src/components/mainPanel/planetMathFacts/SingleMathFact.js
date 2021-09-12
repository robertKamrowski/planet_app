import React from 'react';
import styled from 'styled-components';

const StyledSingleFact = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px 24px;
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const StyledFactName = styled.p`
  opacity: 0.5;
  letter-spacing: 0.07rem;
  font-size: 0.8rem;
  line-height: 1.6rem;
  font-weight: bold;
`;

const StyledFactValue = styled.p`
  font-size: 2rem;
  letter-spacing: -0.08rem;
  font-family: 'Antonio';
  line-height: 2.6rem;
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
