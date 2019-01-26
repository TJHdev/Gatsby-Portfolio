import React from 'react';
import styled from 'styled-components';
import ProfilePhoto from '../../images/profile-photo.jpg';

// styles
import SectionContainer from '../styled-components/SectionContainer';

// components
import SkillsCard from '../common-components/SkillsCard';
import Heading from '../common-components/Heading';

// data
import skillsData from '../data/skillsData';

const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 2rem;
`;

const ProfileImg = styled.img`
  max-width: 180px;
  width: 40%;

  border: 3px solid white;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const AboutMeContainer = styled.div`

  color: white;
  margin: 0 2rem; 
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.86);
  padding: 10px;
  max-width: 1140px;
}
`;

const SubHeading = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 1.5rem;
`;

const AboutMe = React.forwardRef((props, ref) => (
  <SectionContainer ref={ref}>
    <div className="row center">
      <Heading heading="About Me" />
    </div>

    <PhotoContainer>
      <ProfileImg src={ProfilePhoto} />
    </PhotoContainer>

    <FlexContainer>
      <AboutMeContainer>
        {/* <SubHeading>Background</SubHeading> */}
        <Text>
          I am a Junior Full-Stack Web Developer with a focus on React and Node.
          I gained an in-depth understanding of JavaScript to enable proficiency
          in React for frontend and Node for backend development. I self-taught
          a vast array of other tools and technologies when they have been
          required. Highlights include: PostgreSQL for storing and retrieving
          relational data, Docker for easily deploying to cloud providers,
          Postman for testing APIs created using Node and ExpressJS.
          <br />
          <br />
          After 8 years in Mechanical Engineering I have decided to finally make
          the jump into software. I have always been extremely passionate about
          technology and this career move reflects my desire to be involved in
          the cutting edge of business, technology and the web.
          <br />
          <br />
          From May 2018, I left my job as a Mechanical Design Engineer to
          retrain full time as a web developer. I have used online courses and
          project-based learning as the main vehicle for improving my skill set.
          I also frequently attend programming meet-ups such as LeedsJS and
          CodeUp.
        </Text>
      </AboutMeContainer>
    </FlexContainer>
  </SectionContainer>
));

export default AboutMe;
