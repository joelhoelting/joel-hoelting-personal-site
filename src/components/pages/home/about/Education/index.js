import React from 'react';
import EducationSection from './EducationSection';

import educationArray from '~/data/education';

import { StyledCategoryTitle } from '../../_shared/styles';

const Education = props => {
  return (
    <div {...props}>
      <StyledCategoryTitle className="center">Education</StyledCategoryTitle>
      {educationArray.map((educationObj, idx) => (
        <EducationSection key={`education-section-${idx}`} sectionData={educationObj} />
      ))}
    </div>
  );
};

export default Education;
