import React from 'react';
import styled from 'styled-components';

const PortfolioContainer = styled.div`
  position: relative;
  left: 0;
  width: 100vw;
  overflow: hidden;
}
`;

const PortfolioCard = styled.div`
  background-color: rgba(1, 1, 1, 0.8);
  color: white;
  font-size: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  transition: all 0.3s;
`;
const PortfolioCardImg = styled.img``;
const PortfolioCardTitle = styled.h3``;
const PortfolioCardText = styled.p``;

const Portfolio = () => (
  <PortfolioContainer>
    <div className="row">
      <div className="col-1-of-4">
        <PortfolioCard>
          <PortfolioCardImg src="" />
          <PortfolioCardTitle>Jesmond Engineering</PortfolioCardTitle>
          <PortfolioCardText>
            Jesmond Engineering was a summer placement in Structural Analysis of
            aircraft. During this placement I was tasked to create some
            automated excel spread sheet outputs and a batch file to automate
            tasks while we were out of the office.
          </PortfolioCardText>
        </PortfolioCard>
      </div>
      <div className="col-1-of-4">
        <PortfolioCard>
          <PortfolioCardImg src="" />
          <PortfolioCardTitle>The University of Hull</PortfolioCardTitle>
          <PortfolioCardText>
            I studied a 4 year MEng Mechanical Engineering degree at the
            University of Hull. The course featured many different areas of
            focus, from basic C programming, machine workshop training and
            modules in Engineering Management. I Graduated in 2014 with a 1st
            class honours.
          </PortfolioCardText>
        </PortfolioCard>
      </div>
      <div className="col-1-of-4">
        <PortfolioCard>
          <PortfolioCardImg src="" />
          <PortfolioCardTitle>
            Applied Drilling Technology International
          </PortfolioCardTitle>
          <PortfolioCardText>
            Immediately after graduating I worked offshore as a trainee drilling
            engineer. This was a great learning experience, involving training
            in helicopter emergyency escape, fire fighting and directing cranes.
            The shift pattern and environment was tiring and solidified a good
            work ethic.
            <br />
            Unfortunatly the company was liquidated during the oil price crash
            in 2015.
          </PortfolioCardText>
        </PortfolioCard>
      </div>
      <div className="col-1-of-4">
        <PortfolioCard>
          <PortfolioCardImg src="" />
          <PortfolioCardTitle>Engie</PortfolioCardTitle>
          <PortfolioCardText>
            My role at Engie was Mechanical Design Engineer
          </PortfolioCardText>
        </PortfolioCard>
      </div>
    </div>
  </PortfolioContainer>
);

export default Portfolio;
