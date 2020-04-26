import React from 'react';
import EducationSection from './EducationSection';

import educationArray from '~/data/education';

const Education = props => {
  return (
    <div {...props}>
      <h3 className="center">Education</h3>
      {educationArray.map((educationObj, idx) => (
        <EducationSection key={`education-section-${idx}`} sectionData={educationObj} />
      ))}
    </div>
  );
};

export default Education;
