import React from 'react';
import styled, { keyframes } from 'styled-components';

const keyframesCycleFillColors = keyframes`
  0% {
    fill: #ED1C24;
  }

  20% {
    fill: #D8D8D8;
  }

  60% {
    fill: #9067C6;
  }

  80% {
    fill: #1B998B;
  }

  100% {
    fill: #ED1C24;
  }
`;

const keyframesFloating = keyframes`
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(0);
  }
`;

const StyledSVG = styled.svg`
  animation: ${keyframesCycleFillColors} 6s linear infinite;
  opacity: 0;
  position: relative;
  top: -10px;
  transition: all 100ms ease;
  width: 30px;

  &.active {
    animation: ${keyframesCycleFillColors} 6s linear infinite,
      ${keyframesFloating} 5s linear infinite;
    opacity: 1;
    top: 0;
    transition: all 500ms ease 200ms;
  }
`;

const DoubleArrows = ({ active }) => {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 611.41 612"
      className={active && 'active'}
    >
      <title>Down Arrows</title>
      <path
        d="M611.7,325.4V267.49L306,554.09.3,267.49V325.4L306,612Zm0-267.49V0L306,286.6.3,0V57.91L306,344.51Z"
        transform="translate(-0.3 0)"
      />
    </StyledSVG>
  );
};

export default DoubleArrows;
