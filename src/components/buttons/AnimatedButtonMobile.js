import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { cycleBorderColors } from '~/styles/animations';

const AnimatedButtonWrapper = styled.button`
  border-width: 3px;
  border-style: solid;
  animation: 6s linear infinite ${cycleBorderColors};
  background: none;
  color: ${props => props.theme.color};
  padding: 1em 4em;
  cursor: pointer;
  font-size: 0.5em;
  text-transform: uppercase;
  margin: 1em 0;
`;

const AnimatedButtonMobile = ({ buttonText }) => {
  return <AnimatedButtonWrapper className="mobile">{buttonText}</AnimatedButtonWrapper>;
};

AnimatedButtonMobile.propTypes = {
  buttonText: PropTypes.string.isRequired
};

export default AnimatedButtonMobile;
