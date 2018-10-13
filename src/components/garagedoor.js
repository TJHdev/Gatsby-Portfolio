import React from 'react';
import styled from 'styled-components';
import PropTypes from 'gatsby';
import background from '../images/background-large.jpeg';

const BackgroundWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: 24;

  perspective: 10rem;
  transition: transform 2s ease;
  transform-origin: top;

  transform: ${props =>
    props.garageDoorUp ? 'rotateX(90deg)' : 'rotateX(0deg)'};
`;

const BackgroundContainer = styled.div`
  transition: all 0s;
`;

const Background = styled.img`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100vw;
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
  // border-radius: 5px;
  padding: 0.3rem;
  text-transform: uppercase;
  transition: transform ease-in 0.1s;

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
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(calc(-50% - 4px), 10px);
  transition: all 1s ease-in;
  font-weight: 800;
  font-size: 2rem;
  width: 330px;
  z-index: 15;
  text-align: center;
`;

const IntroText = styled.p`
  --verticalOffset: ${props => props.verticalOff}
  display: block;
  position: relative;
  top: 50%;
  left: 50%;

  z-index: 15;
  width: 330px;
`;
// transition: transform 1.5s cubic-bezier(0, 0.45, 0.26, 1) ${props =>
//   props.delay};
// transform: ${props =>
//   props.hidden
//     ? 'translate(-400%, var(--verticalOffset))'
//     : 'translate(calc(-50%), var(--verticalOffset))'};

class Garagedoor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    };
  }

  showText = () => {
    this.setState({ hidden: false });
  };

  render() {
    const { garageDoorUp, action } = this.props;
    const { hidden } = this.state;
    return (
      <BackgroundWrapper garageDoorUp={garageDoorUp}>
        <BackgroundContainer>
          <Background src={background} alt="background image" />
        </BackgroundContainer>
        <HeroButtonContainer>
          <Button onClick={this.showText}>Need a hero?</Button>
        </HeroButtonContainer>
        <IntroTextContainer hidden={hidden}>
          <IntroText
            hidden={hidden}
            direction="left"
            delay=".5s"
            verticalOff="10px"
          >
            Then you've come to the wrong place...
          </IntroText>
          <br />
          <IntroText
            hidden={hidden}
            direction="left"
            delay="2s"
            verticalOff="50px"
          >
            I can, however build you fully responsive websites, using the latest
            and greatest techniques.
          </IntroText>
          <br />
          <IntroText
            hidden={hidden}
            direction="bottom"
            delay="3.5s"
            verticalOff="140px"
          >
            Click
            <Button onClick={action}> here </Button>
            to find out more.
          </IntroText>
        </IntroTextContainer>
      </BackgroundWrapper>
    );
  }
}

Garagedoor.propTypes = {
  garageDoorUp: PropTypes.boolean.isRequired,
  action: PropTypes.func.isRequired,
};

export default Garagedoor;

// transition: all 1s cubic-bezier(0, 0.45, 0.26, 1) 1s;
// transform: ${props =>
//   props.hidden
//     ? 'translate(-400%, 30px)'
//     : 'translate(calc(-50% - 4px), 30px)'};
// z-index: 10;

// font-weight: 800;
// font-size: 2rem;
// width: 330px;
// text-align: center;