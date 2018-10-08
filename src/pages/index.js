import React from 'react';
import { Link } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';

import Layout from '../components/layout';
import Garagedoor from '../components/garagedoor';

const theme = {
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
  <ThemeProvider theme={theme}>
    <Layout>
      <Garagedoor />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StyledLink to="/page-2/">Go to page 2</StyledLink>
      <StyledLink primary to="/page-2/">
        Go to page 2
      </StyledLink>
    </Layout>
  </ThemeProvider>
);

export default IndexPage;
