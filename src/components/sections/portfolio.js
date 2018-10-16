import React from 'react';
import styled from 'styled-components';

// styled components
import SectionContainer from '../styled-components/SectionContainer';
import Heading from '../common-components/Heading';

// components
import PortfolioCard from '../common-components/PortfolioCard';

// data
import portfolioData from '../data/portfolioData';

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

const Portfolio = () => (
  <SectionContainer>
    <div className="row center">
      <Heading heading="Portfolio" />
    </div>

    <PortfolioCardGrid>
      {portfolioData.map(portfoliodata => (
        <PortfolioCard {...portfoliodata} />
      ))}
    </PortfolioCardGrid>
  </SectionContainer>
);

export default Portfolio;
