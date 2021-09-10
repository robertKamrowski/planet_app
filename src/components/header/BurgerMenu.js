import React from 'react';
import styled from 'styled-components';

const Burger = styled.div`
  width: 24px;
  height: 17px;
`;

const BurgerIcon = () => {
  return (
    <Burger>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
        <g fill="#FFF" fillRule="evenodd">
          <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
        </g>
      </svg>
    </Burger>
  );
};

export default BurgerIcon;
