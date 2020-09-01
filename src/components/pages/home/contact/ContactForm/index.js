import React from 'react';
import styled from 'styled-components';

import FormLogic from './formLogic';

import { mediaMin } from '~/styles/mediaQueries';

import MobileInput from './MobileInput';
import KozakuraDesktopInput from './KozakuraInput';
import ThreeDots from '~/components/spinners/ThreeDots';

import { StyledCategoryTitle } from '~/components/pages/home/_shared/styles';

const FormContainer = styled.div`
  position: relative;
`;

const StyledContactForm = styled.form`
  max-width: 800px;
  margin: 0 auto;
  opacity: ${props => (props.submitted ? 0 : 1)};
  visibility: ${props => (props.submitted ? 'hidden' : 'visible')};
  transition: opacity 300ms ease, visibility 300ms ease;

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

  ${'' /* Honeypot */}
  input[name='address'] {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 0;
    z-index: -1;
  }
  ${'' /* Honeypot */}

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

const ThankYouContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  visibility: ${props => (props.submitted ? 'visible' : 'hidden')};
  opacity: ${props => (props.submitted ? 1 : 0)};
  transition: opacity 300ms ease, visibility 300ms ease;
  button {
    margin: 1em 0;
    padding: 1em;
    border-radius: 10px;
    cursor: pointer;
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
    errors,
    submitted,
    submitting,
    resetForm
  } = FormLogic();

  const containsErrors = Object.values(errors).includes(true);

  return (
    <FormContainer>
      <StyledCategoryTitle>Contact Me</StyledCategoryTitle>
      <StyledContactForm onSubmit={handleSubmit} submitted={submitted}>
        <MobileInput field="name" handleChange={handleChange} inputs={inputs} errors={errors} />
        <MobileInput field="email" handleChange={handleChange} inputs={inputs} errors={errors} />
        <KozakuraDesktopInput
          field="name"
          handleChange={handleChange}
          inputs={inputs}
          errors={errors}
        />
        <KozakuraDesktopInput
          field="email"
          handleChange={handleChange}
          inputs={inputs}
          errors={errors}
        />
        <textarea
          name="textarea"
          onChange={handleChange}
          value={inputs.textarea}
          className={errors.textarea ? 'invalid' : undefined}
          placeholder="Send me an email ..."
        />

        {/* HoneyPot */}
        <input
          name="address"
          onChange={handleChange}
          value={inputs.address}
          placeholder="please provide your address"
        />
        {/* HoneyPot */}

        <button type="submit" value="Submit" disabled={containsErrors || submitting}>
          {!submitting && <span>Send Email</span>}
          {submitting && <ThreeDots />}
        </button>
        <ErrorNotification containsErrors={containsErrors}>
          invalid fields present
        </ErrorNotification>
      </StyledContactForm>
      <ThankYouContainer submitted={submitted}>
        <p>Thank you for reaching out to me!</p>
        <button onClick={resetForm}>Send me another email</button>
      </ThankYouContainer>
    </FormContainer>
  );
};

export default ContactForm;
