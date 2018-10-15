import React from 'react';
import styled from 'styled-components';

// styled components
import SectionContainer from '../styled-components/SectionContainer';
import Heading from '../common-components/Heading';

// images
import iconCss from '../../images/icons/css-3.svg';
import iconEs6 from '../../images/icons/es6.svg';
import iconFirebase from '../../images/icons/firebase.svg';
import iconGit from '../../images/icons/git-icon.svg';
import iconGithub from '../../images/icons/github-icon.svg';
import iconHeroku from '../../images/icons/heroku.svg';
import iconHtml5 from '../../images/icons/html-5.svg';
import iconJS from '../../images/icons/javascript.svg';
import iconJest from '../../images/icons/jest.svg';
import iconMocha from '../../images/icons/mocha.svg';
import iconMongo from '../../images/icons/mongodb-original.svg';
import iconNodeJS from '../../images/icons/nodejs-icon.svg';
import iconNpm from '../../images/icons/npm.svg';
import iconPostman from '../../images/icons/postman.svg';
import iconReact from '../../images/icons/react.svg';
import iconRedux from '../../images/icons/redux.svg';
import iconSass from '../../images/icons/sass.svg';
import iconWebpack from '../../images/icons/webpack.svg';

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

const SkillsIcon = styled.img`
  z-index: 10;
  width: 80px;
  // background-color: rgba(100, 100, 100, 0.6);

  color: white;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 3px;
  transition: all 0.3s;

  &:hover,
  &:active,
  &:focus {
    transform: scale(2);
  }

  &:hover + div {
    z-index: 10;
    color: rgba(255, 255, 255, 1);
    display: block;
    transform: scale(1);
  }
`;

const SkillsDescriptionContainer = styled.div`
  z-index: -5;
  font-size: 1.1rem;
  position: relative;

  background-color: rgba(0, 0, 0, 0);
  color: rgba(255, 255, 255, 0);
  display: block;
  transition: all 0.5s;
  position: relative;
  transform: scale(0.2);
`;

const SkillsDescription = styled.div`
  z-index: 1;
  position: absolute;
  top: 15px;
  left: -70px;

  background-color: rgba(0, 0, 0, 0.86);
  padding: 10px;

  width: 220px;

  @media only screen and (max-width: 45em) {
    font-size: 1.5rem;
    width: 140px;
    left: -30px;
    top: 30px;
  }
`;

const SkillsTitle = styled.h1`
  text-align: center;
`;

const SkillsText = styled.p`
  font-size: 1.5rem;
`;

const Skills = () => (
  <SectionContainer>
    <div className="row center">
      <Heading heading="Skills" />
    </div>
    <SkillsIconsContainer>
      <div>
        <SkillsIcon src={iconJS} />
        <SkillsDescriptionContainer>
          <SkillsDescription>
            <SkillsTitle>JavaScript</SkillsTitle>
            <SkillsText>
              A programming language made prolific through the use in the
              browser. It is now seen as the language of the web.
            </SkillsText>
          </SkillsDescription>
        </SkillsDescriptionContainer>
      </div>
      <div>
        <SkillsIcon src={iconEs6} />
        <SkillsDescriptionContainer>
          <SkillsDescription>
            <SkillsTitle>ECMA Script 6</SkillsTitle>
            <SkillsText>
              Released in 2015, ES6 brought a major update to the JavaScript
              language adding many new features.
            </SkillsText>
          </SkillsDescription>
        </SkillsDescriptionContainer>
      </div>
      <div>
        <SkillsIcon src={iconHtml5} />
        <SkillsDescriptionContainer>
          <SkillsDescription>
            <SkillsTitle>HTML 5</SkillsTitle>
            <SkillsText>
              HTML 5 is the mark-up language for the browser.
            </SkillsText>
          </SkillsDescription>
        </SkillsDescriptionContainer>
      </div>
      <div>
        <SkillsIcon src={iconCss} />
        <SkillsDescriptionContainer>
          <SkillsDescription>
            <SkillsTitle>CSS 3</SkillsTitle>
            <SkillsText>
              Cascading Style Sheets 3, is the latest version of the language
              used to add visual spice to a website
            </SkillsText>
          </SkillsDescription>
        </SkillsDescriptionContainer>
      </div>
      <div>
        <SkillsIcon src={iconSass} />
        <SkillsDescriptionContainer>
          <SkillsDescription>
            <SkillsTitle>Sass</SkillsTitle>
            <SkillsText>
              Sass is a widely-used extension language for CSS.
            </SkillsText>
          </SkillsDescription>
        </SkillsDescriptionContainer>
      </div>
      <div>
        <SkillsIcon src={iconNodeJS} />
        <SkillsDescriptionContainer>
          <SkillsDescription>
            <SkillsTitle>NodeJS</SkillsTitle>
            <SkillsText>
              Allows the use of JavaScript to write server side code. Built on
              top of Chrome's JavaScript V8 runtime engine.
            </SkillsText>
          </SkillsDescription>
        </SkillsDescriptionContainer>
      </div>
      <div>
        <SkillsIcon src={iconNpm} />
        <SkillsDescriptionContainer>
          <SkillsDescription>
            <SkillsTitle>Node Package Manager</SkillsTitle>
            <SkillsText>
              NPM is both a command line interface and the world's largest
              software registry with approximately 3 billion downloads per week.
            </SkillsText>
          </SkillsDescription>
        </SkillsDescriptionContainer>
      </div>
      <div>
        <SkillsIcon src={iconReact} />
        <SkillsDescriptionContainer>
          <SkillsDescription>
            <SkillsTitle>React</SkillsTitle>
            <SkillsText>
              React is a view library built by Facebook, released in 2013. It
              aims to enable complex & dynamic websites to be built using
              re-usable components.
            </SkillsText>
          </SkillsDescription>
        </SkillsDescriptionContainer>
      </div>
      <div>
        <SkillsIcon src={iconRedux} />
        <SkillsDescriptionContainer>
          <SkillsDescription>
            <SkillsTitle>Redux</SkillsTitle>
            <SkillsText>
              Redux is a JS library for state management. It is commonly used in
              conjunction with React or Angular.
            </SkillsText>
          </SkillsDescription>
        </SkillsDescriptionContainer>
      </div>
      <div>
        <SkillsIcon src={iconGit} />
        <SkillsDescriptionContainer>
          <SkillsDescription>
            <SkillsTitle>GIT</SkillsTitle>
            <SkillsText>
              GIT is the go-to version control software. Allowing teams to
              collaborate and keep track of changes in complex projects.
            </SkillsText>
          </SkillsDescription>
        </SkillsDescriptionContainer>
      </div>
      <div>
        <SkillsIcon src={iconGithub} />
        <SkillsDescriptionContainer>
          <SkillsDescription>
            <SkillsTitle>Github</SkillsTitle>
            <SkillsText>
              Github is the most popular remote repository on the web. This
              allows the remote use of GIT in a seamless fashion.
            </SkillsText>
          </SkillsDescription>
        </SkillsDescriptionContainer>
      </div>
      <div>
        <SkillsIcon src={iconJest} />
        <SkillsDescriptionContainer>
          <SkillsDescription>
            <SkillsTitle>Jest</SkillsTitle>
            <SkillsText>
              Is a testing library developed by Facebook aimed at enabling
              efficient testing of the React and React Native applications.
            </SkillsText>
          </SkillsDescription>
        </SkillsDescriptionContainer>
      </div>
      <div>
        <SkillsIcon src={iconMocha} />
        <SkillsDescriptionContainer>
          <SkillsDescription>
            <SkillsTitle>Mocha</SkillsTitle>
            <SkillsText>
              Is another popular testing framework for both NodeJS and the
              browser
            </SkillsText>
          </SkillsDescription>
        </SkillsDescriptionContainer>
      </div>
      <div>
        <SkillsIcon src={iconPostman} />
        <SkillsDescriptionContainer>
          <SkillsDescription>
            <SkillsTitle>Postman</SkillsTitle>
            <SkillsText>
              Is a program / chrome extension for testing RESTful APIs. Postman
              makes it easy to to test, develop and document APIs through HTTP
              requests.
            </SkillsText>
          </SkillsDescription>
        </SkillsDescriptionContainer>
      </div>
      <div>
        <SkillsIcon src={iconWebpack} />
        <SkillsDescriptionContainer>
          <SkillsDescription>
            <SkillsTitle>Webpack</SkillsTitle>
            <SkillsText>
              Webpack is a module bundler which simplifies the build process for
              web applications.
            </SkillsText>
          </SkillsDescription>
        </SkillsDescriptionContainer>
      </div>
      <div>
        <SkillsIcon src={iconHeroku} />
        <SkillsDescriptionContainer>
          <SkillsDescription>
            <SkillsTitle>Heroku</SkillsTitle>
            <SkillsText>
              Is a popular cloud platform that enables building, delivery,
              monitoring and scaling of applications.
            </SkillsText>
          </SkillsDescription>
        </SkillsDescriptionContainer>
      </div>
      <div>
        <SkillsIcon src={iconFirebase} />
        <SkillsDescriptionContainer>
          <SkillsDescription>
            <SkillsTitle>Firebase</SkillsTitle>
            <SkillsText>
              Is a cloud backend as a service platform by Google. It seemlessly
              intergrates NoSQL database, authentication and server hosting.
            </SkillsText>
          </SkillsDescription>
        </SkillsDescriptionContainer>
      </div>
      <div>
        <SkillsIcon src={iconMongo} />
        <SkillsDescriptionContainer>
          <SkillsDescription>
            <SkillsTitle>MongoDB</SkillsTitle>
            <SkillsText>
              Is a popular open-source NoSQL database. It stores data in
              JSON-like documents.
            </SkillsText>
          </SkillsDescription>
        </SkillsDescriptionContainer>
      </div>
    </SkillsIconsContainer>
  </SectionContainer>
);

export default Skills;
