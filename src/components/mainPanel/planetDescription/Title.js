import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h2`
  text-transform: uppercase;
`;

const Title = ({ planetName }) => <StyledTitle>{planetName}</StyledTitle>;

export default Title;
