import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  text-align: center;
  margin-top: 16px;
  font-size: 1.1rem;
  line-height: 2.2rem;
  opacity: 0.8;
`;

const Description = ({ content }) => (
  <StyledParagraph>{content}</StyledParagraph>
);

export default Description;
