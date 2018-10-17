import React from 'react';

// styled components
import SectionContainer from '../styled-components/SectionContainer';
import Heading from '../common-components/Heading';
import WorkExperienceCard from '../common-components/WorkExpCard';

// data
import workExperienceData from '../data/workexperienceData';

const WorkExperience = () => (
  <SectionContainer>
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
