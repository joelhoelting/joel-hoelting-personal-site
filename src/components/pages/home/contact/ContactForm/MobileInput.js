import React from 'react';
import styled from 'styled-components';

import { capitalizeFirstLetter } from '~/helpers/strings';

const StyledMobileInput = styled.input`
  border: none;
  height: 50px;
  margin-bottom: 25px;
  padding: 12px;
  font-size: 14px;
  width: 100%;
  background: ${props =>
    props.hasError ? props.theme.formInputBackgroundInvalid : props.theme.formInputBackground};
  color: #fff;
  caret-color: #fff;
  transition: background 500ms ease;

  &::placeholder {
    color: #fff;
    opacity: 1;
  }

  &:focus {
    background: ${props =>
      props.hasError
        ? props.theme.formInputBackgroundInvalid
        : props.theme.formInputBackgroundFocus};
  }
`;

const MobileInput = ({ field, handleBlur, handleChange, inputs, errors }) => {
  const value = inputs[field];
  const error = errors[field];

  return (
    <StyledMobileInput
      className="mobile"
      hasError={error}
      name={field}
      onBlur={handleBlur}
      onChange={handleChange}
      placeholder={capitalizeFirstLetter(field)}
      type="text"
      value={value}
    />
  );
};

export default MobileInput;
