import React from 'react';
import TechSection from './TechSection';
import styled from 'styled-components';

import techStackArray from '~/data/tech';

const TechWrapper = styled.div`
  margin: 5em auto;
`;

const Tech = () => {
  return (
    <TechWrapper>
      <h3 className="center">Tech</h3>
      {techStackArray.map(sectionData => (
        <TechSection sectionData={sectionData} />
      ))}
    </TechWrapper>
  );
};

export default Tech;
