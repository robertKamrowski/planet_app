import React from 'react';
import styled from 'styled-components';
import linkIcon from '../../../assets/icon-source.svg';

const StyledLinWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  margin-top: 32px;
  opacity: 0.5;
  font-size: 1.2rem;
  line-height: 2.5rem;
`;

const StyledLink = styled.a`
  color: #fff;
  font-weight: bold;
  margin-left: 5px;
  letter-spacing: 0.05rem;
`;

const StyledArrow = styled.img`
  width: 12px;
  height: 12px;
  margin-left: 4px;
`;

const SourceLink = ({ source }) => (
  <StyledLinWrapper>
    <p>Source:</p>
    <StyledLink href={source} target="_blank">
      Wikipedia
    </StyledLink>
    <StyledArrow src={linkIcon} alt="" />
  </StyledLinWrapper>
);

export default SourceLink;
