import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import HorizontalRule from '../styled-components/HorizontalRule';

const HeadingContainer = styled.div`
  display: inline-block;

  background-color: rgba(0, 0, 0, 0.8);
  font-size: 1.3rem;

  padding: 0.5rem 1rem 1rem 1rem;
  margin: auto;
  border: 3px solid white;
`;

const Heading = styled.h1`
  color: white;
  text-transform: uppercase;
`;

const HeadingBackground = ({ heading }) => (
  <HeadingContainer>
    <Heading>{heading}</Heading>
    <HorizontalRule />
  </HeadingContainer>
);

HeadingBackground.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default HeadingBackground;
