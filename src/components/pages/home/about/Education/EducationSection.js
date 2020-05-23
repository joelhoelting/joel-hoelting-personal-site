import React from 'react';

import AnimatedSection from '../../_shared/AnimatedSection';

const EducationSection = ({ sectionData }) => {
  const { endDate, heading, listDescription, subHeading, startDate } = sectionData;

  return (
    <AnimatedSection
      bottomOffset="200px"
      endDate={endDate}
      heading={heading}
      lineDuration={1000}
      listDescription={listDescription}
      subHeading={subHeading}
      startDate={startDate}
      noListItems
    />
  );
};

export default EducationSection;
