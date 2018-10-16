import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Icon = styled.img`
  z-index: 10;
  width: 80px;
  // background-color: rgba(100, 100, 100, 0.6);

  color: white;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 3px;
  transition: all 0.3s;

  &:hover,
  &:active,
  &:focus {
    transform: scale(2);
  }

  &:hover + div {
    z-index: 10;
    color: rgba(255, 255, 255, 1);
    display: block;
    transform: scale(1);
  }
`;

const DescriptionContainer = styled.div`
  z-index: -5;
  font-size: 1.1rem;
  position: relative;

  background-color: rgba(0, 0, 0, 0);
  color: rgba(255, 255, 255, 0);
  display: block;
  transition: all 0.5s;
  position: relative;
  transform: scale(0.2);
`;

const Description = styled.div`
  z-index: 1;
  position: absolute;
  top: 15px;
  left: -70px;

  background-color: rgba(0, 0, 0, 0.86);
  padding: 10px;

  width: 220px;

  @media only screen and (max-width: 45em) {
    font-size: 1.5rem;
    width: 140px;
    left: -30px;
    top: 30px;
  }
`;

const Title = styled.h1`
  text-align: center;
`;

const Text = styled.p`
  font-size: 1.5rem;
`;

const Card = ({ iconPath, skillsTitle, skillsText }) => (
  <div>
    <Icon src={iconPath} />
    <DescriptionContainer>
      <Description>
        <Title>{skillsTitle}</Title>
        <Text>{skillsText}</Text>
      </Description>
    </DescriptionContainer>
  </div>
);

Card.propTypes = {
  iconPath: PropTypes.string.isRequired,
  skillsTitle: PropTypes.string.isRequired,
  skillsText: PropTypes.string.isRequired,
};

export default Card;
