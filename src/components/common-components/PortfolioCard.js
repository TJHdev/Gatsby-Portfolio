import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PortfolioCard = styled.div`
  position: relative;
  width: 250px;
  height: 172px;
  overflow: hidden;
`;

const PortfolioCardOverlay = styled.a`
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;

  color: rgba(255, 255, 255, 0);

  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.93);
    color: rgba(255, 255, 255, 1);
  }

  &:hover + img {
    transform: scale(1.4);
  }
`;

const PortfolioCardImg = styled.img`
  width: 100%;
  height: auto;
  transition: all 0.4s;
`;

const PortfolioTextContainer = styled.div`
  text-align: center;
  font-size: 1.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
  width: 75%;
`;

const PortfolioCardTitle = styled.h3`
  margin-bottom: 2px;
`;

const Card = ({ image, link, title, text }) => (
  <PortfolioCard>
    <PortfolioCardOverlay href={link} target="_blank">
      <PortfolioTextContainer>
        <PortfolioCardTitle>{title}</PortfolioCardTitle>
        <p>{text}</p>
      </PortfolioTextContainer>
    </PortfolioCardOverlay>
    <PortfolioCardImg src={image} />
  </PortfolioCard>
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
