import React from 'react';
import ExperienceSection from './ExperienceSection';

import experienceArray from '~/data/experience';

const Experience = props => {
  return (
    <div {...props}>
      <h3 className="center">Experience</h3>
      {experienceArray.map((experienceObj, idx) => (
        <ExperienceSection key={`tech-section-${idx}`} sectionData={experienceObj} />
      ))}
    </div>
  );
};

export default Experience;
