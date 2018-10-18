import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import background from '../images/background-large.jpeg';

import GaragedoorText from './garagedoor-text-canvas';
import GaragedoorTextNew from './garagedoor-text-canvas-new';
// import GaragedoorTextNew from './example';

const GaragedoorContainer = styled.div`
  position: fixed;
  left: 0;
  z-index: 50;
`;

const BackgroundWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: 24;

  transition: transform 2s ease;
  transform-origin: top;

  transform: ${props =>
    props.garageDoorUp ? 'rotateX(90deg) scale(1.6)' : 'rotateX(0deg)'};
`;

const Background = styled.img`
  position: fixed;
  top: 50%;
  left: 50%;

  min-width: 100vw;
  min-height: 100vh;

  transform: translate(-50%, -50%);
  z-index: 1;
`;

const HeroButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(calc(-50% - 4px), calc(-50% - 120px));
  z-index: 10;
`;

const Button = styled.button`
  z-index: 25;

  font-weight: 800;
  background-color: white;
  color: black;
  border: black solid 1.5px;
  padding: 0.3rem;
  margin: 0 5px;

  text-transform: uppercase;
  transition: transform 1s ease-in 0.1s;

  cursor: pointer;

  outline: none;

  &:hover,
  &:active,
  &:focus {
    color: white;
    background-color: black;
  }

  &:active {
    transform: translate(0px, 2px);
  }
`;

const IntroTextContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 53%;

  font-weight: 800;
  font-size: 2rem;
  width: 330px;
  z-index: 30;
  text-align: center;
`;

const IntroText = styled.p`
  --verticalOffset: ${props => props.verticalOff};

  position: relative;
  z-index: 30;
  width: 330px;
  padding-bottom: 1.5rem;

  transition: all 0.8s cubic-bezier(0.1, 0.69, 0.57, 0.96)
    ${props => props.delay};

  transform: ${props =>
    props.isHidden ? 'translate(-50%, 200px)' : 'translate(-50%, 0px)'};

  opacity: ${props => (props.isHidden ? '0' : '1')};
`;

const GaragedoorTextExampleContainer = styled.div`
  z-index: 20;
  position: absolute;
  left: 0;
  top: 0;
`;

class Garagedoor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
    };
  }

  showText = () => {
    this.setState({ isHidden: false });
  };

  render() {
    const { garageDoorUp, action } = this.props;
    const { isHidden } = this.state;
    return (
      <BackgroundWrapper garageDoorUp={garageDoorUp}>
        <GaragedoorContainer>
          <GaragedoorText />
          <GaragedoorTextNew />
        </GaragedoorContainer>
        <GaragedoorTextExampleContainer />
        <Background src={background} alt="background image" />
        <HeroButtonContainer>
          <Button onClick={this.showText}>Need a hero?</Button>
        </HeroButtonContainer>
        <IntroTextContainer>
          <IntroText isHidden={isHidden} delay=".2s" verticalOff="10px">
            {"Then you've come to the wrong place..."}
          </IntroText>
          <IntroText isHidden={isHidden} delay="1s" verticalOff="50px">
            {
              'I can, however build you fully responsive websites, using the latest and greatest techniques.'
            }
          </IntroText>
          <IntroText isHidden={isHidden} delay="2s" verticalOff="140px">
            {`Click`}
            <Button onClick={action}> here </Button>
            {`to find out more.`}
          </IntroText>
        </IntroTextContainer>
      </BackgroundWrapper>
    );
  }
}

Garagedoor.propTypes = {
  garageDoorUp: PropTypes.bool.isRequired,
  action: PropTypes.func.isRequired,
};

export default Garagedoor;
