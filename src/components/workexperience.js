import React from 'react';
import styled from 'styled-components';
import background from '../images/background-inside-garage.jpg';

import jesmond from '../images/jesmond.jpg';
import hull from '../images/hull_university.jpg';
import adti from '../images/adti.jpg';
import engie from '../images/engie.jpg';

// Background and main container
// **************
const WorkExpContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 10rem 0;
  overflow: hidden;
}
`;
const WorkExpBackgroundImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  filter: blur(5px);
  transform: scale(1.05);
  overflow: hidden;
  background: cover;
`;

// Heading
// **************
const HeadingContainer = styled.div`
  background-color: rgba(1, 1, 1, 0.8);
  height: 100px;
`;

// Cards contents
// **************
const WorkExpCard = styled.div`
  background-color: rgba(1, 1, 1, 0.8);
  color: white;
  font-size: 1.5rem;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  transition: all 0.3s;

  &:hover {
    transform: scale(1.15);
  }
`;
const WorkExpCardImg = styled.img`
  width: 100%;
  height: 20%;
`;
const WorkExpCardTitle = styled.h3`
  padding: 1rem 2rem 0 2rem;
`;
const WorkExpCardText = styled.p`
  padding: 1rem 2rem 2rem 2rem;
`;
const HorizontalRule = styled.hr`
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #333, #ccc, #333);
`;

const WorkExperience = () => (
  <WorkExpContainer>
    <WorkExpBackgroundImage src={background} />
    <div className="row">
      <HeadingContainer />
    </div>
    <div className="row">
      <div className="col-1-of-4">
        <WorkExpCard>
          <WorkExpCardImg src={jesmond} />
          <div>
            <WorkExpCardTitle>
              Jesmond Engineering
              <HorizontalRule />
            </WorkExpCardTitle>
            <WorkExpCardText>
              Jesmond Engineering was a summer placement in Structural Analysis
              of aircraft. During this placement I was tasked to create some
              automated excel spread sheet outputs and a batch file to automate
              tasks while we were out of the office.
            </WorkExpCardText>
          </div>
        </WorkExpCard>
      </div>
      <div className="col-1-of-4">
        <WorkExpCard>
          <WorkExpCardImg src={hull} />
          <WorkExpCardTitle>
            The University of Hull
            <HorizontalRule />
          </WorkExpCardTitle>
          <WorkExpCardText>
            I studied a 4 year MEng Mechanical Engineering degree at the
            University of Hull. The course featured a wide variety of modules
            from C programming, machine workshop training to lectures on
            engineering management. I Graduated in 2014 with a 1st class
            honours.
          </WorkExpCardText>
        </WorkExpCard>
      </div>
      <div className="col-1-of-4">
        <WorkExpCard>
          <WorkExpCardImg src={adti} />
          <WorkExpCardTitle>
            Applied Drilling Technology International
            <HorizontalRule />
          </WorkExpCardTitle>

          <WorkExpCardText>
            Immediately after graduating I worked offshore as a trainee drilling
            engineer. This was a great learning experience, involving training
            in helicopter emergyency escape, fire fighting and directing cranes.
            The shift pattern and environment was tiring and solidified a good
            work ethic.
            <br />
            Unfortunately the company was liquidated during the oil price crash
            in 2015.
          </WorkExpCardText>
        </WorkExpCard>
      </div>
      <div className="col-1-of-4">
        <WorkExpCard>
          <WorkExpCardImg src={engie} />
          <WorkExpCardTitle>
            Engie
            <HorizontalRule />
          </WorkExpCardTitle>

          <WorkExpCardText>
            My role at Engie was Mechanical Design Engineer on a combined
            heating and power station.
          </WorkExpCardText>
        </WorkExpCard>
      </div>
    </div>
  </WorkExpContainer>
);

export default WorkExperience;
