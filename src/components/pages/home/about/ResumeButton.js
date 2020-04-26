import React from 'react';

import AnimatedButton from '~/components/buttons/AnimatedButton';

import ResumePDF from '~/assets/pdf/joel_hoelting_resume_2020.pdf';

const ContinueButton = () => {
  return (
    <a href={ResumePDF} target="_blank" rel="noopener noreferrer">
      <AnimatedButton
        buttonText="Download Resume"
        fontSize="1em"
        strokeWidth={6}
        hoverStrokeWidth={12}
        width={400}
      />
    </a>
  );
};

export default ContinueButton;
