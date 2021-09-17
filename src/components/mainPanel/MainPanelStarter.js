import React, { useState, useContext } from 'react';
import Typewriter from 'typewriter-effect';
import styled, { keyframes } from 'styled-components';
import rocket from '../../assets/lastRocket.svg';
import { AppContext } from '../../providers/AppProvider';

const EntranceComponentWrapper = styled.main`
  height: calc(100vh - 69px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 15px;
  position: relative;
  transition: transform 0.4s;
  transform: ${(p) => (p.isOpened ? 'scale(0)' : '')};
  overflow-x: hidden;
`;

const StyledTitle = styled.h2`
  font-family: 'Space Mono';
  margin-bottom: 10px;
  & .Typewriter {
    color: ${({ theme }) => theme.white};
    &__wrapper,
    &__cursor {
      font-size: 2.3rem;
    }
  }
`;

const AppDescription = styled.p`
  width: 70%;
  font-size: ${({ primary }) => (primary ? '1.8rem' : '1.4rem')};
  margin-bottom: ${({ primary }) => (primary ? '15px' : '')};
  transform: scale(0);
  transition: transform 0.7s;
  transform: ${({ active }) => (active ? 'scale(1)' : 'scale(0)')};
  text-align: center;
  .afraid {
    font-size: 1.4rem;
    font-weight: bold;
  }

  .space-word {
    font-size: 1.8rem;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

const flyAround = keyframes`
 from{
  transform: rotate(360deg) translateX(90px);
 }
 to{
  transform: rotate(0) translateX(90px);
 }
`;

const RocketImage = styled.img`
  display: block;
  width: 80px;
  animation: ${flyAround} 6s linear infinite;
  position: absolute;
  top: 65%;
`;

const MainPanelStarter = () => {
  const [active, setActive] = useState(false);
  const { isMenuOpened, toggleMenuOpen } = useContext(AppContext);

  return (
    <EntranceComponentWrapper isOpened={isMenuOpened}>
      <StyledTitle>
        <Typewriter
          onInit={(writer) => {
            writer
              .typeString('Welcome to the Space!')
              .callFunction(() => setActive(true))
              .pauseFor(1500)
              .deleteAll()
              .typeString('Click Rocket to start!')
              .start();
          }}
        />
      </StyledTitle>

      <AppDescription primary active={active}>
        Hey! <br /> It seems you're in
        <span className="space-word"> space!</span>
      </AppDescription>

      <AppDescription active={active}>
        And if you're <span className="afraid">as curious</span> as me, It would
        be awesome to take a look at our solar system planets with their
        features!
      </AppDescription>

      <RocketImage
        onClick={toggleMenuOpen}
        src={rocket}
        alt="Picture of a spaceship rocket."
      />
    </EntranceComponentWrapper>
  );
};

export default MainPanelStarter;
