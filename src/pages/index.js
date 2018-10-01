import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <Link to="/page-3/">Go to page 3</Link>
    <br />
    <Link to="/page-4/">Go to page 4</Link>
  </Layout>
);

export default IndexPage;
