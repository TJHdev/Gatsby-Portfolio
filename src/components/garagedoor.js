import React from 'react';
import styled from 'styled-components';
import background from '../images/background-large.jpeg';

const BackgroundWrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: 1;
`;

const Background = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const HeroButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(calc(-50% - 4px), calc(-50% - 120px));
  z-index: 10;

  font-weight: 800;
  background-color: white;
  color: black;
  border: black solid 1.5px;
  border-radius: 5px;
  padding: 0.3rem;
  text-transform: uppercase;
  transition: all ease-in 0.2s;

  outline: none;

  &:hover,
  &:active,
  &:focus {
    color: white;
    background-color: black;
  }

  &:active {
    transform: translate(calc(-50% - 4px), calc(-50% - 119px));
  }
`;

const IntroText = styled.p`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(calc(-50% - 4px), 30px);
  z-index: 10;

  font-weight: 800;
  font-size: 2rem;
  width: calc(330px);
  text-align: center;
`;

const Garagedoor = () => (
  <BackgroundWrapper>
    <Background src={background} alt="background image" />
    <HeroButton>Need a hero?</HeroButton>
    <IntroText>
      Then you've come to the wrong place...
      <IntroText />
      <IntroText>
        I can, however build you fully responsive websites, using the latest and
        greatest techniques.
      </IntroText>
      <IntroText>Scroll down to find out more.</IntroText>
    </IntroText>
  </BackgroundWrapper>
);

export default Garagedoor;
