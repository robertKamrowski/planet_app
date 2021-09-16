import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  width: 100%;
  max-width: 327px;
  margin-top: 16px;
  text-align: center;
  font-size: 1.1rem;
  line-height: 2.2rem;
  opacity: 0.8;

  @media (min-width: 768px) {
    margin-top: 24px;
    text-align: left;
  }

  @media (min-width: 1440px) {
    font-size: 1.4rem;
    line-height: 2.5rem;
  }
`;

const Description = ({ content }) => (
  <StyledParagraph>{content}</StyledParagraph>
);

export default Description;
