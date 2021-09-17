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
  overflow: hidden;

  @media (min-width: 768px) {
    height: calc(100vh - 158px);
    padding: 60px 100px;
  }
`;

const StyledTitle = styled.h2`
  font-family: 'Space Mono';
  margin-bottom: 10px;
  text-align: center;
  & .Typewriter {
    color: ${({ theme }) => theme.white};
    &__wrapper,
    &__cursor {
      font-size: 2.2rem;
    }
  }

  @media (min-width: 768px) {
    min-height: 140px;
    margin-bottom: 50px;
    & .Typewriter__wrapper,
    & .Typewriter__cursor {
      font-size: 4.2rem;
    }
  }

  @media (min-width: 1440px) {
    width: 42%;
    & .Typewriter__wrapper,
    & .Typewriter__cursor {
      font-size: 4.8rem;
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
  .curious {
    font-size: 1.4rem;
    font-weight: bold;
  }

  .space-word {
    font-size: 1.8rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    line-height: 3rem;
    font-size: ${({ primary }) => (primary ? '2.6rem' : '2.2rem')};
    margin-bottom: ${({ primary }) => (primary ? '45px' : '')};
    .curious {
      font-size: 2.2rem;
    }
    .space-word {
      font-size: 2.2rem;
    }
  }

  @media (min-width: 1440px) {
    width: 50%;
    line-height: 4rem;
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
  top: 63%;

  @media (min-width: 768px) {
    width: 120px;
    top: 67%;
  }
  @media (min-width: 1440px) {
    top: 70%;
  }
`;

const MainPanelStarter = () => {
  const [active, setActive] = useState(false);
  const { isMenuOpened, toggleMenuOpen, useWindowWidth } =
    useContext(AppContext);

  const entranceMessage =
    useWindowWidth() >= 768
      ? 'Choose a planet you want to explore!'
      : 'Click Rocket to start!';

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
              .typeString(entranceMessage)
              .start();
          }}
        />
      </StyledTitle>

      <AppDescription primary active={active}>
        Hey! <br /> It seems you're in
        <span className="space-word"> space!</span>
      </AppDescription>

      <AppDescription active={active}>
        And if you're as <span className="curious">curious</span> as me, it
        would be awesome to take a look at our solar system planets with their
        breathtaking features !
      </AppDescription>

      <RocketImage
        onClick={useWindowWidth() >= 768 ? null : toggleMenuOpen}
        src={rocket}
        alt="Picture of a spaceship rocket."
      />
    </EntranceComponentWrapper>
  );
};

export default MainPanelStarter;
