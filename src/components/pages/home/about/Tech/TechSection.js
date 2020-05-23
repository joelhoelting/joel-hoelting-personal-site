import React from 'react';

import AnimatedSection from '../../_shared/AnimatedSection';
import AnimatedListItem from '../../_shared/AnimatedListItem';

const TechSection = ({ sectionData }) => {
  const { heading, listItems } = sectionData;
  const techItemClassName = 'tech-list-item';

  return (
    <AnimatedSection bottomOffset="200px" heading={heading} lineDuration={3000}>
      {listItems.map((techListItem, idx) => {
        return (
          <AnimatedListItem
            className={techItemClassName}
            idx={idx}
            key={`${techItemClassName}-${idx}`}
            lineDuration={2000}
          >
            {techListItem.icon}
            <span>{techListItem.name}</span>
          </AnimatedListItem>
        );
      })}
    </AnimatedSection>
  );
};

export default TechSection;
