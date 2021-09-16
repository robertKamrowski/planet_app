import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h2`
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 4.8rem;
    line-height: 6.2rem;
  }

  @media (min-width: 1440px) {
    font-size: 8rem;
    line-height: 10.4rem;
  }
`;

const Title = ({ planetName }) => <StyledTitle>{planetName}</StyledTitle>;

export default Title;
