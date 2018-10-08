import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';

const StyledLink = styled(Link)`
  color: red;
  text-decoration: none;
`;

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StyledLink to="/page-2/">Go to page 2</StyledLink>
    <br />
    <Link to="/page-3/">Go to page 3</Link>
    <br />
    <Link to="/page-4/">Go to page 4</Link>
  </Layout>
);

export default IndexPage;
