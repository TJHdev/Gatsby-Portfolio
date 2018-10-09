import React from 'react';
import { Link } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';

import Layout from '../components/layout';
import Garagedoor from '../components/garagedoor';
import WorkExperience from '../components/workexperience';

const blackTheme = {
  primary: 'red',
};

const StyledLink = styled(Link)`
  background: ${props => (props.primary ? 'blue' : 'grey')};
  color: ${props => (props.primary ? 'palevioletred' : 'black')};
  text-decoration: none;

  @media only screen and (max-width: 45em) {
    background-color: green;
  }
`;

const IndexPage = () => (
  <ThemeProvider theme={blackTheme}>
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StyledLink to="/page-2/">Go to page 2</StyledLink>
      <StyledLink primary="true" to="/page-2/">
        Go to page 2
      </StyledLink>
      <Garagedoor />
      <WorkExperience />
    </Layout>
  </ThemeProvider>
);

export default IndexPage;
