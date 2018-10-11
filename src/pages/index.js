import React from 'react';
import { Link } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import Layout from '../components/layout';
import Garagedoor from '../components/garagedoor';
import WorkExperience from '../components/workexperience';
import Skills from '../components/skills';
import Portfolio from '../components/portfolio';
import Footer from '../components/footer';

const blackTheme = {
  primary: 'red',
};

const IndexPage = () => (
  <ThemeProvider theme={blackTheme}>
    <Layout>
      <Garagedoor />
      <WorkExperience />
      <Skills />
      <Portfolio />
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default IndexPage;
