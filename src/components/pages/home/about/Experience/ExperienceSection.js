import React from 'react';

import AnimatedSection from '../_shared/AnimatedSection';
import AnimatedListItem from '../_shared/AnimatedListItem';

const ExperienceSection = ({ sectionData }) => {
  const { endDate, heading, listDescription, listItems, subHeading, startDate } = sectionData;
  const className = 'experience-list-item';

  return (
    <AnimatedSection
      endDate={endDate}
      heading={heading}
      listDescription={listDescription}
      subHeading={subHeading}
      startDate={startDate}
    >
      {listItems.map((experienceListItem, idx) => {
        return (
          <AnimatedListItem
            className={className}
            idx={idx}
            key={`${className}-${idx}`}
            // staggerInterval={400}
            transitionDuration={500}
          >
            <span>&#10095; {experienceListItem}</span>
          </AnimatedListItem>
        );
      })}
    </AnimatedSection>
  );
};

export default ExperienceSection;
