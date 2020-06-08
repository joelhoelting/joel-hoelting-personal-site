import React from 'react';
import styled from 'styled-components';

import FormLogic from './formLogic';

import { mediaMin } from '~/styles/mediaQueries';

import MobileInput from './MobileInput';
import KozakuraDesktopInput from './KozakuraInput';
import ThreeDots from '~/components/spinners/ThreeDots';

import { StyledCategoryTitle } from '../../../home/_shared/styles';

const StyledContactForm = styled.form`
  max-width: 800px;
  margin: 0 auto;

  textarea {
    width: 100%;
    border: none;
    background: ${props => props.theme.formInputBackground};
    padding: 12px;
    min-height: 400px;
    resize: none;
    color: #fff;
    font-size: 14px;
    transition: all 500ms ease;
    ${mediaMin.tabletLandscape`
      width: calc(100% - 20px);
      margin: 0 10px;
    `}

    &.invalid {
      background: ${props => props.theme.formInputBackgroundInvalid};
      &:focus {
        background: ${props => props.theme.formInputBackgroundInvalid};
      }
    }
    &::placeholder {
      color: #fff;
      font-size: 14px;
      opacity: 1;
    }

    &:focus {
      background: ${props => props.theme.formInputBackgroundFocus};
      &::placeholder {
        color: transparent;
      }
    }
  }

  button {
    width: 100%;
    padding: 0;
    margin: 25px 0;
    width: 100%;
    height: 80px;
    border: none;
    background: ${props => props.theme.formInputBackground};
    color: ${props => props.theme.formSubmitBtnColor};
    font-size: 16px;
    cursor: pointer;
    transition: all 300ms ease;
    display: flex;
    align-items: center;
    justify-content: center;

    ${mediaMin.tabletLandscape`
      width: calc(100% - 20px);
      margin: 25px 10px;
    `}

    &:disabled {
      cursor: initial;
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:hover:not([disabled]) {
      background: ${props => props.theme.formInputBackgroundFocus};
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
    }

    span {
      position: absolute;
    }

    .three-dots-spinner {
      position: absolute;
    }
  }
`;

const ErrorNotification = styled.p`
  color: red;
  text-align: center;
  opacity: ${props => (props.containsErrors ? 1 : 0)};
`;

const ContactForm = () => {
  const {
    inputs,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    submitted,
    submitting
  } = FormLogic();

  const containsErrors = Object.values(errors).includes(true);

  return (
    <StyledContactForm onSubmit={handleSubmit}>
      <StyledCategoryTitle>Contact Me</StyledCategoryTitle>
      <MobileInput
        field="name"
        handleBlur={handleBlur}
        handleChange={handleChange}
        inputs={inputs}
        errors={errors}
      />
      <MobileInput
        field="email"
        handleBlur={handleBlur}
        handleChange={handleChange}
        inputs={inputs}
        errors={errors}
      />
      <KozakuraDesktopInput
        handleBlur={handleBlur}
        handleChange={handleChange}
        inputs={inputs}
        errors={errors}
        field="name"
      />
      <KozakuraDesktopInput
        handleBlur={handleBlur}
        handleChange={handleChange}
        inputs={inputs}
        errors={errors}
        field="email"
      />
      <textarea
        name="textarea"
        onBlur={handleBlur}
        onChange={handleChange}
        value={inputs.textarea}
        className={errors.textarea ? 'invalid' : undefined}
        placeholder="Send me an email ..."
      />
      <button type="submit" value="Submit" disabled={containsErrors || submitting}>
        {!submitting && <span>Send Email</span>}
        {submitting && <ThreeDots />}
      </button>
      <ErrorNotification containsErrors={containsErrors}>invalid fields present</ErrorNotification>
    </StyledContactForm>
  );
};

export default ContactForm;
