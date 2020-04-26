import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { cycleStrokeColors } from '~/styles/animations';

const AnimatedButtonWrapper = styled.button`
  background: none;
  border: none;
  width: ${props => `${props.width}px`};
  height: ${props => `${props.width / 5}px`};
  text-align: center;
  text-transform: uppercase;
  position: relative;
  line-height: ${props => `${props.width / 5}px`};
  font-size: ${props => props.fontSize || '.6em'};
  letter-spacing: 2px;
  padding: 0;
  ${'' /* transition: opacity 300ms ease;
  opacity: ${props => (props.visible ? 1 : 0)}; */}
  cursor: pointer;
  ${'' /* outline: none; */}

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
    stroke-width: 4;
    transition: all 500ms;

    &:hover {
      fill: ${props => props.theme.continueBtnFill};
      stroke-dashoffset: ${props => props.hoverStrokeDashOffset};
      stroke-width: 8;
    }
  }
`;

const AnimatedButton = ({ buttonText, fontSize, width }) => {
  const height = width / 5;
  const strokeDashArray = height * 2 + width * 2;
  const hoverStrokeDashOffset = height * 2 + width;
  const buttonProps = { fontSize, height, width, hoverStrokeDashOffset, strokeDashArray };

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
  width: PropTypes.number.isRequired
};

export default AnimatedButton;
