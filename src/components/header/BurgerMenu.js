import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../providers/AppProvider';

const Burger = styled.div`
  width: 24px;
  height: 17px;
  right: 24px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const BurgerIcon = () => {
  const { isMenuOpened, toggleMenuOpen } = useContext(AppContext);

  const icon = isMenuOpened ? (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="19"
      viewBox="0 0 121.31 122.876"
      enableBackground="new 0 0 121.31 122.876"
    >
      <g>
        <path
          fill="#FFF"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M90.914,5.296c6.927-7.034,18.188-7.065,25.154-0.068 c6.961,6.995,6.991,18.369,0.068,25.397L85.743,61.452l30.425,30.855c6.866,6.978,6.773,18.28-0.208,25.247 c-6.983,6.964-18.21,6.946-25.074-0.031L60.669,86.881L30.395,117.58c-6.927,7.034-18.188,7.065-25.154,0.068 c-6.961-6.995-6.992-18.369-0.068-25.397l30.393-30.827L5.142,30.568c-6.867-6.978-6.773-18.28,0.208-25.247 c6.983-6.963,18.21-6.946,25.074,0.031l30.217,30.643L90.914,5.296L90.914,5.296z"
        />
      </g>
    </svg>
  ) : (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="19"
      viewBox="0 0 122.879 103.609"
      enableBackground="new 0 0 122.879 103.609"
    >
      <g>
        <path
          fill="#FFF"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.368,0h102.144c5.703,0,10.367,4.665,10.367,10.367v0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,20.735,0,16.07,0,10.368v0C0,4.665,4.666,0,10.368,0L10.368,0z M10.368,82.875 h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0c0,5.702-4.664,10.367-10.367,10.367H10.368C4.666,103.609,0,98.944,0,93.242l0,0 C0,87.54,4.666,82.875,10.368,82.875L10.368,82.875z M10.368,41.438h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,62.173,0,57.507,0,51.805l0,0C0,46.103,4.666,41.438,10.368,41.438 L10.368,41.438z"
        />
      </g>
    </svg>
  );

  return <Burger onClick={toggleMenuOpen}> {icon}</Burger>;
};

export default BurgerIcon;
