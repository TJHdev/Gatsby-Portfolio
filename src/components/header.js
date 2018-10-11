import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

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
  flex-wrap: wrap;
  max-width: 1000px;
  min-width: 100px;
  padding: 1rem 0.5rem;
`;

const PageLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const MobileNavButtonContainer = styled.div``;

const NavButton = styled.button`
  width: 90px;

  z-index: 10;

  font-size: 1rem;
  font-weight: 800;
  background-color: black;
  color: white;
  border: white solid 1px;
  // border-radius: 5px;
  padding: 0.1rem;
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
    <HeaderContainer>
      <MobileNavButtonContainer>
        <NavButton>Experience</NavButton>
        <NavButton>Skills</NavButton>
      </MobileNavButtonContainer>
      <MobileNavButtonContainer>
        <NavButton>Portfolio</NavButton>
        <NavButton>Contact</NavButton>
      </MobileNavButtonContainer>
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;

/*
 <HeaderWrapper>
    <HeaderContainer>
      <div className="row">
        <div className="col-1-of-4">
          <NavButton>Go outside</NavButton>
        </div>
        <div className="col-1-of-4">
          <NavButton>Experience</NavButton>
        </div>
        <div className="col-1-of-4">
          <NavButton>Portfolio</NavButton>
        </div>
        <div className="col-1-of-4">
          <NavButton>Contact</NavButton>
        </div>
      </div>
    </HeaderContainer>
  </HeaderWrapper>
*/
