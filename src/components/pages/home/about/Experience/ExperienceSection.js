import React from 'react';

import AnimatedSection from '../../_shared/AnimatedSection';
import AnimatedListItem from '../../_shared/AnimatedListItem';

const ExperienceSection = ({ sectionData }) => {
  const { endDate, heading, listDescription, listItems, subHeading, startDate } = sectionData;
  const listItemClassName = 'experience-list-item';

  return (
    <AnimatedSection
      bottomOffset="200px"
      endDate={endDate}
      heading={heading}
      lineDuration={2000}
      listDescription={listDescription}
      subHeading={subHeading}
      startDate={startDate}
    >
      {listItems.map((experienceListItem, idx) => {
        return (
          <AnimatedListItem
            className={listItemClassName}
            idx={idx}
            key={`${listItemClassName}-${idx}`}
            lineDuration={2000}
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
