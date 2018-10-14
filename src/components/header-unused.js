import React from 'react';
import styled from 'styled-components';

import TJHlogo from '../images/TJHlogo.svg';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  max-width: 100%;
  z-index: 16;
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
  padding: 1rem 0.5rem;
`;

const MobileNavButtonContainer = styled.div``;

const IconContainer = styled.img`
  height: 60px;
  margin: 1.5rem;
`;

const NavButton = styled.button`
  width: 85px;

  z-index: 16;

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
  &:active,
  &:focus {
    color: black;
    background-color: white;
  }

  &:active {
    transform: translate(0px, 2px);
  }
`;

const Header = () => (
  <HeaderWrapper>
    <IconContainer src={TJHlogo} />
    <HeaderContainer>
      <MobileNavButtonContainer>
        <NavButton>Go outside</NavButton>
        <NavButton>Experience</NavButton>
      </MobileNavButtonContainer>
      <MobileNavButtonContainer>
        <NavButton>Skills</NavButton>
        <NavButton>Portfolio</NavButton>
      </MobileNavButtonContainer>
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;
