import React from 'react';
import AnimatedButton from '~/components/buttons/AnimatedButton';
import AnimatedButtonMobile from '~/components/buttons/AnimatedButtonMobile';

import ResumeLink from '~/components/links/ResumeLink';

const ResumeButton = () => {
  return (
    <ResumeLink>
      <AnimatedButton
        buttonText="Download Resume"
        fontSize="1em"
        strokeWidth={6}
        hoverStrokeWidth={12}
        width={400}
      />
      <AnimatedButtonMobile buttonText="Download Resume" />
    </ResumeLink>
  );
};

export default ResumeButton;
