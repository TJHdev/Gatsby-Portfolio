import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import HorizontalRule from '../styled-components/HorizontalRule';

const WorkExpCard = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  font-size: 1.6rem;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.2);
  transition: all 0.3s;

  &:hover {
    transform: scale(1.15);
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 1);
  }
`;

const WorkExpCardImg = styled.img`
  width: 100%;
  height: 20%;
`;

const WorkExpCardTitle = styled.h3`
  padding: 1rem 2rem 0 2rem;
`;

const WorkExpCardText = styled.p`
  padding: 1rem 2rem 2rem 2rem;
`;

const Card = ({ imgPath, title, text }) => (
  <div className="col-1-of-4">
    <WorkExpCard>
      <WorkExpCardImg src={imgPath} />
      <WorkExpCardTitle>
        {title}
        <HorizontalRule />
      </WorkExpCardTitle>
      <WorkExpCardText>{text}</WorkExpCardText>
    </WorkExpCard>
  </div>
);

Card.propTypes = {
  imgPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;

/*
<WorkExpCard>
          <WorkExpCardImg src={jesmond} />
          <WorkExpCardTitle>
            Jesmond Engineering
            <HorizontalRule />
          </WorkExpCardTitle>
          <WorkExpCardText>
            This was a summer placement as a Structural Analyst with focus in
            the aerospace industry. The placement involved heavy use of Excel
            and Visual Basic for stress calculations and modeling. This
            placement kick-started my interest in programming through developing
            small batch files to automate tasks.
          </WorkExpCardText>
        </WorkExpCard>
*/
