import React from 'react';
import styled from 'styled-components';
import background from '../images/background-inside-garage.jpg';

const WorkExpContainer = styled.div`
  position: absolute;
  top: 100vh;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 20rem 0;
  overflow: hidden;




}
`;
const WorkExpBackgroundImage = styled.img`
  position: absolute;
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

const WorkExpCard = styled.div`
  background-color: rgba(1, 1, 1, 0.8);
  color: white;
  font-size: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  transition: all 0.3s;
`;
const WorkExpCardImg = styled.img``;
const WorkExpCardTitle = styled.h3``;
const WorkExpCardText = styled.p``;

const WorkExperience = () => (
  <WorkExpContainer>
    <WorkExpBackgroundImage src={background} />
    <div className="row">
      <div className="col-1-of-4">
        <WorkExpCard>
          <WorkExpCardImg src="" />
          <WorkExpCardTitle>Jesmond Engineering</WorkExpCardTitle>
          <WorkExpCardText>
            Jesmond Engineering was a summer placement in Structural Analysis of
            aircraft. During this placement I was tasked to create some
            automated excel spread sheet outputs and a batch file to automate
            tasks while we were out of the office.
          </WorkExpCardText>
        </WorkExpCard>
      </div>
      <div className="col-1-of-4">
        <WorkExpCard>
          <WorkExpCardImg src="" />
          <WorkExpCardTitle>The University of Hull</WorkExpCardTitle>
          <WorkExpCardText>
            I studied a 4 year MEng Mechanical Engineering degree at the
            University of Hull. Graduating in 2014 with a 1st class honours. The
            course featured many different areas of focus, from basic C
            programming, machine workshop training and modules in Engineering
            Management
          </WorkExpCardText>
        </WorkExpCard>
      </div>
      <div className="col-1-of-4">
        <WorkExpCard>
          <WorkExpCardImg src="" />
          <WorkExpCardTitle>
            Applied Drilling Technology International
          </WorkExpCardTitle>
          <WorkExpCardText>
            Immediately after graduating I worked offshore as a trainee drilling
            engineer. This was a great learning experience, involving training
            in helicopter emergyency escape, fire fighting and directing cranes.
            The shift pattern and environment was tiring and solidified a good
            work ethic.
            <br />
            Unfortunatly the company was liquidated during the oil price crash
            in 2015.
          </WorkExpCardText>
        </WorkExpCard>
      </div>
      <div className="col-1-of-4">
        <WorkExpCard>
          <WorkExpCardImg src="" />
          <WorkExpCardTitle>Engie</WorkExpCardTitle>
          <WorkExpCardText>
            My role at Engie was Mechanical Design Engineer
          </WorkExpCardText>
        </WorkExpCard>
      </div>
    </div>
  </WorkExpContainer>
);

export default WorkExperience;

//   background-image: linear-gradient(
// 		to right,
// 		rgba(126, 213, 111, 0.8),
// rgba(40, 180, 131, 0.8), );
// background-size: cover;
