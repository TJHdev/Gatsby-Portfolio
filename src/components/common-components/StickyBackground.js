import React from 'react';
import styled from 'styled-components';

// images
import background from '../../images/background-inside-garage.jpg';

const WorkExpBackgroundImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  filter: blur(5px);
  transform: scale(1.05);
  overflow: hidden;
  background: cover;
`;

const StickyBackground = () => <WorkExpBackgroundImage src={background} />;

export default StickyBackground;
