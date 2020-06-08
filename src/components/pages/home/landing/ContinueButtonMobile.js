import React from 'react';
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

const ContinueButtonMobile = ({ visible }) => {
  return (
    <ContinueButtonLink
      className={visible && 'visible'}
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
