import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import AnimtedButtonMobile from '~/components/buttons/AnimatedButtonMobile';

const ContinueButtonLink = styled(Link)`
  transition: opacity 500ms ease;
  opacity: 0;
  &.visible {
    opacity: 1;
  }
`;

const ContinueButtonMobile = () => {
  const [buttonVisible, setbuttonVisible] = useState(false);

  useEffect(() => {
    let buttonVisibleTimer = setTimeout(() => {
      setbuttonVisible(true);
    }, 2000);

    return () => {
      clearTimeout(buttonVisibleTimer);
    };
  });

  return (
    <ContinueButtonLink
      className={buttonVisible && 'visible'}
      duration={600}
      href="#about"
      to="about"
      smooth
    >
      <AnimtedButtonMobile buttonText="Continue" />
    </ContinueButtonLink>
  );
};

export default ContinueButtonMobile;
