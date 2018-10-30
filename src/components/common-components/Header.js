import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import TJHlogo from '../../images/TJHlogo.svg';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  max-width: 100%;
  z-index: 15;
  position: fixed;
  background: rgba(0.05, 0.05, 0.05, 0.9);
  margin-bottom: 1.45rem;
`;

const HeaderNavContainer = styled.div`
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

  z-index: 15;

  font-weight: 700;

  font-size: 1rem;
  background-color: black;
  color: white;
  border: white solid 1px;
  padding: 0.5rem;
  margin: 0.3rem;
  text-transform: uppercase;
  transition: all ease-in 0.1s;

  outline: none;

  cursor: pointer;

  &:hover,
  &:active {
    color: black;
    background-color: white;
  }

  &:active {
    transform: translate(0px, 2px);
  }
`;

const Header = ({ scrollToChild, targetRefs }) => (
  <HeaderContainer>
    <IconContainer src={TJHlogo} />
    <HeaderNavContainer>
      <MobileNavButtonContainer>
        <NavButton
          onClick={() => {
            scrollToChild(targetRefs.experience);
          }}
        >
          Experience
        </NavButton>
        <NavButton
          onClick={() => {
            scrollToChild(targetRefs.skills);
          }}
        >
          Skills
        </NavButton>
        <NavButton
          onClick={() => {
            scrollToChild(targetRefs.portfolio);
          }}
        >
          Portfolio
        </NavButton>
      </MobileNavButtonContainer>
    </HeaderNavContainer>
  </HeaderContainer>
);

Header.propTypes = {
  scrollToChild: PropTypes.func.isRequired,
  targetRefs: PropTypes.object.isRequired, // eslint-disable-line
};

export default Header;
