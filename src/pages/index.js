import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import scrollToComponent from 'react-scroll-to-component';

import Layout from '../components/layout';
import Garagedoor from '../components/garagedoor';
import WorkExperience from '../components/workexperience';
import Skills from '../components/skills';
import Portfolio from '../components/portfolio';
import Footer from '../components/footer';

import TJHlogo from '../images/TJHlogo.svg';

const blackTheme = {
  primary: 'red',
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  max-width: 100%;
  z-index: 9;
  position: fixed;
  background: rgba(0.05, 0.05, 0.05, 0.9);
  margin-bottom: 1.45rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1000px;
  min-height: 70px;
  padding: 1rem 0.5rem;
`;

const MobileNavButtonContainer = styled.div``;

const IconContainer = styled.img`
  height: 60px;
  margin: 1.5rem;
`;

const NavButton = styled.button`
  width: 85px;

  z-index: 10;

  font-size: 1rem;
  font-weight: 800;
  background-color: black;
  color: white;
  border: white solid 1px;
  padding: 0.5rem;
  margin: 0.3rem;
  text-transform: uppercase;
  transition: all ease-in 0.1s;

  outline: none;

  &:hover,
  &:active {
    color: black;
    background-color: white;
  }

  &:active {
    transform: translate(0px, 2px);
  }
`;

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      garageDoorUp: false,
    };
  }

  toggleGarage = () => {
    this.setState(prevState => ({
      garageDoorUp: !prevState.garageDoorUp,
    }));
  };

  render() {
    const { garageDoorUp } = this.state;
    return (
      <ThemeProvider theme={blackTheme}>
        <Layout>
          <HeaderWrapper>
            <IconContainer src={TJHlogo} />
            <HeaderContainer>
              <MobileNavButtonContainer>
                <NavButton onClick={this.toggleGarage}>Go outside</NavButton>

                <NavButton
                  onClick={() =>
                    scrollToComponent(this.experience, {
                      align: 'top',
                      duration: 1000,
                    })
                  }
                >
                  Experience
                </NavButton>
              </MobileNavButtonContainer>
              <MobileNavButtonContainer>
                <NavButton
                  onClick={() =>
                    scrollToComponent(this.skills, {
                      offset: -100,
                      align: 'top',
                      duration: 1000,
                    })
                  }
                >
                  Skills
                </NavButton>

                <NavButton
                  onClick={() =>
                    scrollToComponent(this.portfolio, {
                      offset: -100,
                      align: 'top',
                      duration: 1000,
                    })
                  }
                >
                  Portfolio
                </NavButton>
              </MobileNavButtonContainer>
            </HeaderContainer>
          </HeaderWrapper>
          <Garagedoor garageDoorUp={garageDoorUp} action={this.toggleGarage} />
          <WorkExperience
            ref={section => {
              this.experience = section;
            }}
          />
          <Skills
            ref={section => {
              this.skills = section;
            }}
          />
          <Portfolio
            ref={section => {
              this.portfolio = section;
            }}
          />
          <Footer />
        </Layout>
      </ThemeProvider>
    );
  }
}

export default IndexPage;
