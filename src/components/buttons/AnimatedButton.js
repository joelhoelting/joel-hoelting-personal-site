import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { cycleStrokeColors } from '~/styles/animations';

const AnimatedButtonWrapper = styled.a`
  width: ${props => props.width || '300px'};
  height: ${props => props.height || '60px'};
  text-align: center;
  text-transform: uppercase;
  position: relative;
  line-height: ${props => props.height || '60px'};
  font-size: ${props => props.fontSize || '.6em'};
  letter-spacing: 2px;
  transition: opacity 300ms ease;
  opacity: ${props => (props.visible ? 1 : 0)};
  cursor: pointer;

  svg,
  rect {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    fill: transparent;
  }

  svg rect {
    animation: 6s linear infinite ${cycleStrokeColors};
    stroke-dasharray: ${props => props.strokeDashArray || 720};
    stroke-dashoffset: 0;
    stroke-width: 4;
    transition: all 500ms;

    &:hover {
      stroke-dashoffset: ${props => props.hoverStrokeDashOffset || 420};
      stroke-width: ${props => props.hoverStrokeWidth || 8};
      fill: ${props => props.theme.continueBtnFill};
    }
  }
`;

const AnimatedButton = props => {
  return (
    <>
      <AnimatedButtonWrapper {...props}>
        <svg>
          <rect></rect>
        </svg>
        {props.buttonText}
      </AnimatedButtonWrapper>
    </>
  );
};

AnimatedButton.propTypes = {
  buttonText: PropTypes.string,
  fontSize: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  strokeDashArray: PropTypes.number,
  hoverStrokeDashOffset: PropTypes.number,
  hoverStrokeWidth: PropTypes.number
};

export default AnimatedButton;
