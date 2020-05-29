import React from 'react';
import ExperienceSection from './ExperienceSection';

import experienceArray from '~/data/experience';

import { StyledCategoryTitle } from '../../_shared/styles';

const Experience = props => {
  return (
    <div {...props}>
      <StyledCategoryTitle>Experience</StyledCategoryTitle>
      {experienceArray.map((experienceObj, idx) => (
        <ExperienceSection key={`experience-section-${idx}`} sectionData={experienceObj} />
      ))}
    </div>
  );
};

export default Experience;
