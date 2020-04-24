import React from 'react';

import AnimatedSection from '../_shared/AnimatedSection';
import AnimatedListItem from '../_shared/AnimatedListItem';

const TechSection = ({ sectionData }) => {
  const { heading, listItems } = sectionData;
  const className = 'tech-list-item';

  return (
    <AnimatedSection heading={heading}>
      {listItems.map((techListItem, idx) => {
        return (
          <AnimatedListItem className={className} idx={idx} key={`${className}-${idx}`}>
            {techListItem.icon}
            <span>{techListItem.name}</span>
          </AnimatedListItem>
        );
      })}
    </AnimatedSection>
  );
};

export default TechSection;
