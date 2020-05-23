import React from 'react';
import TechSection from './TechSection';

import techItemsArray from '~/data/tech';

const Tech = props => {
  return (
    <div {...props}>
      <h3 className="center desktop">Tech</h3>
      {techItemsArray.map((techObj, idx) => (
        <TechSection key={`tech-section-${idx}`} sectionData={techObj} />
      ))}
    </div>
  );
};

export default Tech;
