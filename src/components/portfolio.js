import React from 'react';
import styled from 'styled-components';

const PortfolioContainer = styled.div`
  position: relative;
  left: 0 ;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
}
`;

const PortfolioCard = styled.div`
position: relative;
  width: 100vw;
  max-width: 100%;
  height: auto;


  width: 1000px;
	margin: 30px auto;
	background-color: rgba(0,0,0,0.8);
	
	display: grid;
	grid-template-rows: repeat(2, 1fr);
	grid-template-columns: repeat(9, 1fr);
	grid-gap: 5px;
	
	grid-auto-rows: 80px;
	grid-auto-flow: row;
	grid-auto-columns: .5fr; 
	
	align-items: center;
  justify-items: center;
  
  @media only screen and (max-width: 75em) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 5px;
    width: 600px;
    margin: 50px auto;
    padding: 25px;
  }

  @media only screen and (max-width: 45em) {
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
    width: 320px;
    margin: 50px auto;
    padding: 25px;
  }
}
`;

const PortfolioCardImg = styled.img``;
const PortfolioCardTitle = styled.h3``;
const PortfolioCardText = styled.p``;

const Portfolio = () => (
  <PortfolioContainer>
    <PortfolioCard>
      <PortfolioCardImg />

      <PortfolioCardTitle>Expensify</PortfolioCardTitle>
      <PortfolioCardText>
        React front end with Firebase backend to keep track of your expenses.
      </PortfolioCardText>
    </PortfolioCard>
  </PortfolioContainer>
);

export default Portfolio;
