import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import styled, { keyframes } from 'styled-components';

import AnimatedButton from '~/components/buttons/AnimatedButton';
import DoubleArrows from './DoubleArrows';

export const cycleStrokeColors = keyframes`
  0% {
    stroke: #ED1C24;
  }

  20% {
    stroke: #D8D8D8;
  }

  60% {
    stroke: #9067C6;
  }

  80% {
    stroke: #1B998B;
  }

  100% {
    stroke: #ED1C24;
  }
`;

const ContinueButtonLink = styled(Link)`
  margin: 20px 0 0;
  opacity: ${props => (props.buttonVisible ? 1 : 0)};
  transition: opacity 300ms ease;
  outline: none;
  &.visible {
    opacity: 1;
  }
`;

const ContinueButton = () => {
  const [buttonHoverState, setButtonHoverState] = useState(false);
  const [buttonVisible, setbuttonVisible] = useState(false);

  useEffect(() => {
    let buttonVisibleTimer = setTimeout(() => {
      setbuttonVisible(true);
    }, 1500);

    return () => {
      clearTimeout(buttonVisibleTimer);
    };
  });

  return (
    <>
      <ContinueButtonLink
        className={buttonVisible && 'visible'}
        duration={600}
        href="#about"
        to="about"
        smooth
        onMouseEnter={() => setButtonHoverState(true)}
        onMouseLeave={() => setButtonHoverState(false)}
      >
        <AnimatedButton buttonText="continue" width={300} />
      </ContinueButtonLink>
      <DoubleArrows active={buttonVisible && buttonHoverState} />
    </>
  );
};

export default ContinueButton;
