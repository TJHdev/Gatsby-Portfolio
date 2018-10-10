import React from 'react';
import { Link } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';

import Layout from '../components/layout';
import Garagedoor from '../components/garagedoor';
import WorkExperience from '../components/workexperience';
import Portfolio from '../components/portfolio';

const blackTheme = {
  primary: 'red',
};

const IndexPage = () => (
  <ThemeProvider theme={blackTheme}>
    <Layout>
      <Garagedoor />
      <WorkExperience />
      <Portfolio />
    </Layout>
  </ThemeProvider>
);

export default IndexPage;
