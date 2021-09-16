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
  padding: 60px 15px;
  position: relative;
  transition: 0.4s;
  transform: ${(p) => (p.isOpened ? 'scale(0)' : 'scale(1)')};
`;

const StyledTitle = styled.h2`
  font-family: 'Space Mono';
  margin-bottom: 50px;
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
  transform: rotate(360deg) translateX(150px) ;
 }
 to{
  transform: rotate(0) translateX(150px) ;
 }
`;

const RocketImage = styled.img`
  display: block;
  width: 80px;
  animation: ${flyAround} 10s linear infinite;
  position: absolute;
  top: 32%;
  left: 40%;
`;

const RocketSquare = styled.div`
  width: 100%;
  flex-grow: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserMessage = styled.p`
  transform: scale(0);
  transition: transform 1.5s;
  transform: ${({ active }) => (active ? 'scale(1)' : 'scale(0)')};
  background-color: #fff;
  color: #000;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 1.4rem;
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
              .typeString('Welcome to the Solar System!')
              .callFunction(() => setActive(true))
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

      <RocketSquare>
        <UserMessage active={active}>Click a Rocket to start!</UserMessage>
        <RocketImage
          onClick={toggleMenuOpen}
          src={rocket}
          alt="Picture of a spaceship rocket."
        />
      </RocketSquare>
    </EntranceComponentWrapper>
  );
};

export default MainPanelStarter;
