import React from 'react';
import TechSection from './TechSection';

import techItemsArray from '~/data/tech';

import { StyledCategoryTitle } from '../../_shared/styles';

const Tech = props => {
  return (
    <div {...props}>
      <StyledCategoryTitle className="center">Tech</StyledCategoryTitle>
      {techItemsArray.map((techObj, idx) => (
        <TechSection key={`tech-section-${idx}`} sectionData={techObj} />
      ))}
    </div>
  );
};

export default Tech;
