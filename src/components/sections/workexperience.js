import React from 'react';
import styled from 'styled-components';

// styled components
import SectionContainer from '../styled-components/SectionContainer';
import Heading from '../common-components/Heading';
import WorkExperienceCard from '../common-components/WorkExpCard';

// images
import background from '../../images/background-inside-garage.jpg';

// data
import workExperienceData from '../data/workexperienceData';

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

const WorkExperience = () => (
  <SectionContainer>
    <WorkExpBackgroundImage src={background} />
    <div className="row center">
      <Heading heading="Engineering Experience" />
    </div>
    <div className="row">
      {workExperienceData.map(workExperience => (
        <WorkExperienceCard {...workExperience} key={workExperience.title} />
      ))}
    </div>
  </SectionContainer>
);

export default WorkExperience;
