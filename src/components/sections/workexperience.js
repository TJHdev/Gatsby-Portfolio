import React from 'react';
import styled from 'styled-components';
import background from '../../images/background-inside-garage.jpg';

// styled components
import SectionContainer from '../styled-components/SectionContainer';
import Heading from '../common-components/Heading';
import HorizontalRule from '../styled-components/HorizontalRule';
import WorkExperienceCard from '../common-components/WorkExpCard';

// images
import jesmond from '../../images/workexperience/jesmond.jpg';
import webdev from '../../images/workexperience/web-dev.jpg';
import adti from '../../images/workexperience/adti.jpg';
import engie from '../../images/workexperience/engie.jpg';

// Background and main container
// **************
const WorkExpBackgroundImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  filter: blur(5px);
  transform: scale(1.05);
  overflow: hidden;
  background: cover;
`;

const WorkExpCard = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  font-size: 1.6rem;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.2);
  transition: all 0.3s;

  &:hover {
    transform: scale(1.15);
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 1);
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

const WorkExperience = () => (
  <SectionContainer>
    <WorkExpBackgroundImage src={background} />
    <div className="row center">
      <Heading heading="Engineering Experience" />
    </div>
    <div className="row">
      <div className="col-1-of-4">
        <WorkExperienceCard imgPath={jesmond} />
      </div>
      <div className="col-1-of-4">
        <WorkExpCard>
          <WorkExpCardImg src={adti} />
          <WorkExpCardTitle>
            Applied Drilling Technology International
            <HorizontalRule />
          </WorkExpCardTitle>

          <WorkExpCardText>
            Immediately after graduating I started work as a Trainee Drilling
            Engineer. The work environment and shift pattern were challenging.
            However, this instilled a strong work ethic and the experience
            gained working in a team were invaluable. Unfortunately ADTI was
            liquidated during the oil price crash in 2015.
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
            My job title at Engie was Mechanical Design Engineer on a combined
            heating and power station. This position required strong
            problem-solving skills in order to understand how the existing
            mechanical systems worked for integration of new equipment. Frequent
            communcation with multiple stake holders was required to keep the
            project moving forward, this greatly improved my project management
            and people skills.
          </WorkExpCardText>
        </WorkExpCard>
      </div>
      <div className="col-1-of-4">
        <WorkExpCard>
          <WorkExpCardImg src={webdev} />
          <WorkExpCardTitle>
            Web Development
            <HorizontalRule />
          </WorkExpCardTitle>
          <WorkExpCardText>
            From May 2018, I have been retraining full-time as a web developer.
            My main target has been to gain a strong grasp of JavaScript, with a
            secondary goal of becoming familiar with the current JavaScript
            ecosystem and popular frameworks. The skills section below
            highlights the technologies with which I am familiar.
          </WorkExpCardText>
        </WorkExpCard>
      </div>
    </div>
  </SectionContainer>
);

export default WorkExperience;
