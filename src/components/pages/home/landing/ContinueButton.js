import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

import AnimatedButton from '~/components/buttons/AnimatedButton';

const ContinueButtonLink = styled(Link)`
  margin: 20px 0 0;
  opacity: ${props => (props.buttonVisible ? 1 : 0)};
  transition: opacity 500ms ease;
  outline: none;
  &.visible {
    opacity: 1;
  }
`;

const ContinueButton = ({ visible }) => {
  return (
    <>
      <ContinueButtonLink
        className={visible && 'visible'}
        duration={600}
        href="#about"
        to="about"
        smooth
      >
        <AnimatedButton buttonText="continue" width={360} strokeWidth={6} hoverStrokeWidth={12} />
      </ContinueButtonLink>
    </>
  );
};

export default ContinueButton;
