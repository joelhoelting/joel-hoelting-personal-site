import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import styled, { keyframes } from 'styled-components';

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
  width: 300px;
  height: 60px;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  line-height: 60px;
  letter-spacing: 2px;
  font-size: 0.6em;
  margin: 20px 0 0;
  opacity: ${props => (props.buttonVisible ? 1 : 0)};
  transition: opacity 300ms ease;
  outline: none;
  &.visible {
    opacity: 1;
  }

  svg,
  rect {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    fill: transparent;
  }
  ,
  svg rect {
    animation: ${cycleStrokeColors} 6s linear infinite;
    stroke-dasharray: 720, 720;
    stroke-dashoffset: 0;
    stroke-width: 4;
    transition: all 500ms;

    &:hover {
      stroke-dashoffset: 420;
      stroke-width: 8;
      fill: ${props => props.theme.continueBtnFill};
    }
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
        <svg>
          <rect></rect>
        </svg>
        Continue
      </ContinueButtonLink>
      <DoubleArrows active={buttonVisible && buttonHoverState} />
    </>
  );
};

export default ContinueButton;
