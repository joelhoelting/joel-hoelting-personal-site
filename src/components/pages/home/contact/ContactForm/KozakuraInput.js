import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { capitalizeFirstLetter } from '~/helpers/strings';

const KozakuraWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: inline-block;
  margin: 8px 10px;
  width: calc(50% - 20px);
  vertical-align: top;
  overflow: hidden;
  padding-bottom: 16px;

  &.filled {
    input {
      opacity: 1;
    }
    label {
      transform: translate3d(12px, -12px, 0);
    }
    svg {
      fill: ${props => props.theme.formInputBackground};
      transform: translate3d(-66.6%, 0, 0);
    }
  }

  input {
    position: relative;
    display: block;
    float: right;
    padding: 14px 12px;
    width: 100%;
    border: none;
    border-radius: 0;
    background: transparent;
    color: #fff;
    font-weight: 400;
    -webkit-appearance: none; /* for box shadows to show on iOS */
    margin-top: 30px;
    font-size: 14px;
    caret-color: white;

    &:focus {
      outline: none;
    }

    &:focus + label {
      transform: translate3d(12px, -12px, 0);
      color: ${props => props.theme.kozuraInputFocusColor};
    }

    &:focus ~ svg {
      fill: ${props =>
        props.hasError
          ? props.theme.formInputBackgroundInvalid
          : props.theme.formInputBackgroundFocus};
      transform: translate3d(-66.6%, 0, 0);
    }
  }

  label {
    display: inline-block;
    float: right;
    color: #fff;
    font-weight: bold;
    font-size: 12px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-align: left;
    position: absolute;
    top: 14px;
    pointer-events: none;
    overflow: hidden;
    transform: translate3d(12px, 32px, 0);
    transition: transform 0.3s;
  }

  svg {
    position: absolute;
    left: 0;
    fill: ${props =>
      props.hasError ? props.theme.formInputBackgroundInvalid : props.theme.formInputBackground};
    pointer-events: none;
    top: 16px;
    bottom: 0px;
    height: 72px;
    z-index: -1;
    transition: transform 0.7s, fill 0.7s;
    transition-timing-function: cubic-bezier(0, 0.25, 0.5, 1);
  }
`;

const KozakuraInput = ({ field, handleBlur, handleChange, inputs, errors }) => {
  const value = inputs[field];
  const error = errors[field];

  return (
    <KozakuraWrapper className={`desktop ${value.length > 0 && 'filled'}`} hasError={error}>
      <input
        type="text"
        id={field}
        name={field}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
      />
      <label htmlFor={field}>{capitalizeFirstLetter(field)}</label>
      <svg width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
        <path d="M1200,9c0,0-305.005,0-401.001,0C733,9,675.327,4.969,598,4.969C514.994,4.969,449.336,9,400.333,9C299.666,9,0,9,0,9v43c0,0,299.666,0,400.333,0c49.002,0,114.66,3.484,197.667,3.484c77.327,0,135-3.484,200.999-3.484C894.995,52,1200,52,1200,52V9z" />
      </svg>
    </KozakuraWrapper>
  );
};

KozakuraInput.propTypes = {
  field: PropTypes.string.isRequired
};

export default KozakuraInput;
