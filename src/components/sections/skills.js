import React from 'react';
import styled from 'styled-components';

// styles
import SectionContainer from '../styled-components/SectionContainer';

// components
import SkillsCard from '../common-components/SkillsCard';
import Heading from '../common-components/Heading';

// data
import skillsData from '../data/skillsData';

const SkillsIconsContainer = styled.div`
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
    width: 300px;
    margin: 50px auto;
    padding: 30px;
  }

  @media only screen and (max-width: 35em) {
    padding: 5px;
  }
}
`;

const Skills = React.forwardRef((props, ref) => (
  <SectionContainer ref={ref}>
    <div className="row center">
      <Heading heading="Skills" />
    </div>

    <SkillsIconsContainer>
      {skillsData.map(skillData => (
        <SkillsCard {...skillData} key={skillData.skillsTitle} />
      ))}
    </SkillsIconsContainer>
  </SectionContainer>
));

export default Skills;
