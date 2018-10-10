import React from 'react';
import styled from 'styled-components';

import iconCss from '../images/icons/css-3.svg';
import iconEs6 from '../images/icons/es6.svg';
import iconFirebase from '../images/icons/firebase.svg';
import iconGit from '../images/icons/git-icon.svg';
import iconGithub from '../images/icons/github-icon.svg';
import iconHeroku from '../images/icons/heroku.svg';
import iconHtml5 from '../images/icons/html-5.svg';
import iconJS from '../images/icons/javascript.svg';
import iconJest from '../images/icons/jest.svg';
import iconMocha from '../images/icons/mocha.svg';
import iconMongo from '../images/icons/mongodb-original.svg';
import iconNodeJS from '../images/icons/nodejs-icon.svg';
import iconNpm from '../images/icons/npm.svg';
import iconPostman from '../images/icons/postman.svg';
import iconReact from '../images/icons/react.svg';
import iconRedux from '../images/icons/redux.svg';
import iconSass from '../images/icons/sass.svg';
import iconWebpack from '../images/icons/webpack.svg';

const SkillsContainer = styled.div`
  position: relative;
  left: 0;

  width: 100vw;
  height: 100vh;
`;

const SkillsHeadingBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  font-size: 1.5rem;
  text-align: center;
  width: 100px;
  padding: 1rem;
  margin: 0 auto;
`;

const SkillsHeading = styled.h1`
  color: white;
`;

const HorizontalRule = styled.hr`
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #333, #ccc, #333);
`;

const SkillsIconsContainer = styled.div`
  position: relative;
  width: 100vw;
  height: auto;


  width: 1000px;
	margin: 30px auto;
	background-color: rgba(0,0,0,0.8);
	
	display: grid;
	grid-template-rows: repeat(2, 1fr);
	grid-template-columns: repeat(9, 1fr);
	grid-gap: 5px;
	
	grid-auto-rows: 80px; // implicit grid items will be given this property
	grid-auto-flow: row; // determines whether the implicit items are added as columns or rows - default is rows
	grid-auto-columns: .5fr; // gives the sizing for the implicit items
	
	align-items: center;
	justify-items: center;
}
`;

const SkillsItem = styled.img`
  width: 80px;
  background-color: rgba(100, 100, 100, 0.6);

  color: white;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  transition: all 0.3s;

  &:hover,
  &:active,
  &:focus {
    transform: scale(1.7);
    background-color: rgba(180, 180, 180, 1);
  }
`;

const Skills = () => (
  <SkillsContainer>
    <div className="row">
      <SkillsHeadingBackground>
        <SkillsHeading>Skills</SkillsHeading>
        <HorizontalRule />
      </SkillsHeadingBackground>
    </div>
    <SkillsIconsContainer>
      <SkillsItem src={iconJS} />
      <SkillsItem src={iconEs6} />
      <SkillsItem src={iconHtml5} />
      <SkillsItem src={iconCss} />
      <SkillsItem src={iconSass} />
      <SkillsItem src={iconNodeJS} />
      <SkillsItem src={iconNpm} />
      <SkillsItem src={iconReact} />
      <SkillsItem src={iconRedux} />
      <SkillsItem src={iconGit} />
      <SkillsItem src={iconGithub} />
      <SkillsItem src={iconJest} />
      <SkillsItem src={iconMocha} />
      <SkillsItem src={iconPostman} />
      <SkillsItem src={iconWebpack} />
      <SkillsItem src={iconHeroku} />
      <SkillsItem src={iconFirebase} />
      <SkillsItem src={iconMongo} />
    </SkillsIconsContainer>
  </SkillsContainer>
);

export default Skills;
