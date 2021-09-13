import React from 'react';
import styled from 'styled-components';
import linkIcon from '../../../assets/icon-source.svg';

const StyledLinWrapper = styled.div`
  width: 100%;
  height: 25px;
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  line-height: 2.5rem;
  opacity: 0.5;
`;

const StyledLink = styled.a`
  margin-left: 5px;
  font-weight: bold;
  letter-spacing: 0.05rem;
  color: #fff;
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
