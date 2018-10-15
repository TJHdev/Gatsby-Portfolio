import React from 'react';
import styled from 'styled-components';

import blogapp from '../images/portfolio/blogapp.jpg';
import chatapp from '../images/portfolio/chatapp.jpg';
import yelpcamp from '../images/portfolio/yelpcamp.jpg';
import expensify from '../images/portfolio/expensify.jpg';
import quotegen from '../images/portfolio/quotegen.jpg';
import weatherapp from '../images/portfolio/weatherapp.jpg';
import wikiapi from '../images/portfolio/wikiapi.jpg';
import twitchapi from '../images/portfolio/twitchapi.jpg';

const PortfolioContainer = styled.div`
  position: relative;

  width: 100vw;
  max-width: 100%;


  padding-top: 5rem;
}
`;

// Heading
const PortfolioHeadingBackground = styled.div`
  display: inline-block;

  background-color: rgba(0, 0, 0, 0.8);
  font-size: 1.3rem;

  padding: 0.5rem 1rem 1rem 1rem;
  margin: auto;
  border: 3px solid white;
`;

const PortfolioHeading = styled.h1`
  color: white;
  text-transform: uppercase;
`;

const HorizontalRule = styled.hr`
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #333, #ccc, #333);
`;

// Images grid
const PortfolioCardGrid = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: auto;


  width: 1000px;
  margin: 30px auto;
  margin-top: 10rem;
	background-color: rgba(0,0,0,0.8);
	
	display: grid;
	grid-template-rows: repeat(2, 1fr);
	grid-template-columns: repeat(4, 1fr);
	
	grid-auto-rows: 80px;
	grid-auto-flow: row;
	grid-auto-columns: .5fr; 
	
	align-items: center;
  justify-items: center;
  
  @media only screen and (max-width: 75em) {
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(2, 1fr);
    width: 500px;
  }

  @media only screen and (max-width: 35em) {
    grid-template-rows: repeat(8, 1fr);
    grid-template-columns: repeat(1, 1fr);
    width: 250px;
  }
}
`;

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
const PortfolioCardText = styled.p``;

const Portfolio = () => (
  <PortfolioContainer>
    <div className="center">
      <PortfolioHeadingBackground>
        <PortfolioHeading>Portfolio</PortfolioHeading>
        <HorizontalRule />
      </PortfolioHeadingBackground>
    </div>

    <PortfolioCardGrid>
      <PortfolioCard>
        <PortfolioCardOverlay
          href="https://react-course-2-expensify-th.herokuapp.com/dashboard"
          target="_blank"
        >
          <PortfolioTextContainer>
            <PortfolioCardTitle>Expensify</PortfolioCardTitle>
            <PortfolioCardText>
              Expense tracking application. React front end with Firebase
              backend.
            </PortfolioCardText>
          </PortfolioTextContainer>
        </PortfolioCardOverlay>
        <PortfolioCardImg src={expensify} />
      </PortfolioCard>

      <PortfolioCard>
        <PortfolioCardOverlay
          href="https://codepen.io/devbeatz/full/MGayde/"
          target="_blank"
        >
          <PortfolioTextContainer>
            <PortfolioCardTitle>QuoteGen</PortfolioCardTitle>
            <PortfolioCardText>
              A Donald Trump quote generator.
            </PortfolioCardText>
          </PortfolioTextContainer>
        </PortfolioCardOverlay>
        <PortfolioCardImg src={quotegen} />
      </PortfolioCard>

      <PortfolioCard>
        <PortfolioCardOverlay
          href="https://websock-chat-app.herokuapp.com/"
          target="_blank"
        >
          <PortfolioTextContainer>
            <PortfolioCardTitle>ChatApp</PortfolioCardTitle>
            <PortfolioCardText>
              Real time WebSocket chat app built on NodeJS backend.
            </PortfolioCardText>
          </PortfolioTextContainer>
        </PortfolioCardOverlay>
        <PortfolioCardImg src={chatapp} />
      </PortfolioCard>

      <PortfolioCard>
        <PortfolioCardOverlay
          href="https://infinite-tor-55070.herokuapp.com/"
          target="_blank"
        >
          <PortfolioTextContainer>
            <PortfolioCardTitle>YelpCamp</PortfolioCardTitle>
            <PortfolioCardText>
              Website for sharing camping sites, build with NodeJS & Express.
            </PortfolioCardText>
          </PortfolioTextContainer>
        </PortfolioCardOverlay>
        <PortfolioCardImg src={yelpcamp} />
      </PortfolioCard>

      <PortfolioCard>
        <PortfolioCardOverlay
          href="https://codepen.io/devbeatz/full/rvOvRE/"
          target="_blank"
        >
          <PortfolioTextContainer>
            <PortfolioCardTitle>WeatherApp</PortfolioCardTitle>
            <PortfolioCardText>
              Front end for a weather API, displaying the next 24 hours at your
              location.
            </PortfolioCardText>
          </PortfolioTextContainer>
        </PortfolioCardOverlay>
        <PortfolioCardImg src={weatherapp} />
      </PortfolioCard>

      <PortfolioCard>
        <PortfolioCardOverlay
          href="https://blog-app-tjh.herokuapp.com/"
          target="_blank"
        >
          <PortfolioTextContainer>
            <PortfolioCardTitle>BlogApp</PortfolioCardTitle>
            <PortfolioCardText>
              Blog site, built with a React front end with Firebase backend.
            </PortfolioCardText>
          </PortfolioTextContainer>
        </PortfolioCardOverlay>
        <PortfolioCardImg src={blogapp} />
      </PortfolioCard>

      <PortfolioCard>
        <PortfolioCardOverlay
          href="https://codepen.io/devbeatz/full/OZNdBQ/"
          target="_blank"
        >
          <PortfolioTextContainer>
            <PortfolioCardTitle>TwitchTracker</PortfolioCardTitle>
            <PortfolioCardText>
              Shows which of your favourite Twitch streamers are online.
            </PortfolioCardText>
          </PortfolioTextContainer>
        </PortfolioCardOverlay>
        <PortfolioCardImg src={twitchapi} />
      </PortfolioCard>

      <PortfolioCard>
        <PortfolioCardOverlay
          href="https://codepen.io/devbeatz/full/zjrRXB/"
          target="_blank"
        >
          <PortfolioTextContainer>
            <PortfolioCardTitle>WikiApi</PortfolioCardTitle>
            <PortfolioCardText>
              A styled front end for the Wikipedia search API.
            </PortfolioCardText>
          </PortfolioTextContainer>
        </PortfolioCardOverlay>
        <PortfolioCardImg src={wikiapi} />
      </PortfolioCard>
    </PortfolioCardGrid>
  </PortfolioContainer>
);

export default Portfolio;
