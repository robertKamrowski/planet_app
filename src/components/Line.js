import React from 'react';
import styled from 'styled-components';

const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background: ${(p) => p.theme.white};
  opacity: 0.2;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Line = () => <StyledLine></StyledLine>;

export default Line;
