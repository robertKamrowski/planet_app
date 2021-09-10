import React from 'react';
import styled from 'styled-components';

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-130%);
  width: 6px;
  height: 8px;
  opacity: 0.8;

  @media (min-width: 768px) {
    display: none;
  }
`;

const ArrowIcon = () => {
  return (
    <Arrow>
      <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
        <path fill="none" stroke="#FFF" d="M1 0l4 4-4 4" />
      </svg>
    </Arrow>
  );
};

export default ArrowIcon;
