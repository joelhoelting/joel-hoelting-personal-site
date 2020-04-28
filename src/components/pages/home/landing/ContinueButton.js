import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

import AnimatedButton from '~/components/buttons/AnimatedButton';
import DoubleArrows from './DoubleArrows';

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
        <AnimatedButton buttonText="continue" width={300} strokeWidth={5} hoverStrokeWidth={10} />
      </ContinueButtonLink>
      <DoubleArrows active={buttonVisible && buttonHoverState} />
    </>
  );
};

export default ContinueButton;
