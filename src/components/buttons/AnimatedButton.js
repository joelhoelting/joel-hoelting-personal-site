import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { cycleStrokeColors } from '~/styles/animations';

const AnimatedButtonWrapper = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.color};
  height: ${props => `${props.width / 5}px`};
  width: ${props => `${props.width}px`};
  text-align: center;
  text-transform: uppercase;
  position: relative;
  line-height: ${props => `${props.width / 5}px`};
  font-size: ${props => props.fontSize || '.6em'};
  letter-spacing: 2px;
  padding: 0;
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
    stroke-dasharray: ${props => props.strokeDashArray};
    stroke-dashoffset: 0;
    stroke-width: ${props => props.strokeWidth || 4};
    transition: all 500ms ease;
    fill: ${props => props.theme.continueBtnFill};
    fill-opacity: 0;

    &:hover {
      fill-opacity: 1;
      stroke-dashoffset: ${props => props.hoverStrokeDashOffset};
      stroke-width: ${props => props.hoverStrokeWidth || 8};
    }
  }
`;

const AnimatedButton = ({ buttonText, fontSize, strokeWidth, hoverStrokeWidth, width }) => {
  const height = width / 5;
  const strokeDashArray = height * 2 + width * 2;
  const hoverStrokeDashOffset = height * 2 + width;
  const buttonProps = {
    fontSize,
    height,
    width,
    hoverStrokeDashOffset,
    hoverStrokeWidth,
    strokeDashArray,
    strokeWidth
  };

  return (
    <>
      <AnimatedButtonWrapper {...buttonProps}>
        <svg>
          <rect></rect>
        </svg>
        {buttonText || 'Button'}
      </AnimatedButtonWrapper>
    </>
  );
};

AnimatedButton.propTypes = {
  buttonText: PropTypes.string,
  hoverStrokeWidth: PropTypes.number,
  strokeWidth: PropTypes.number,
  width: PropTypes.number.isRequired
};

export default AnimatedButton;
