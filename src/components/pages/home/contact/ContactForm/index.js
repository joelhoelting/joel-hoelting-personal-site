import React from 'react';
import styled from 'styled-components';

import FormLogic from './formLogic';

import KozakuraInput from './KozakuraInput';
import ThreeDots from '~/components/spinners/ThreeDots';

const StyledContactForm = styled.form`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2em 0;

  h2 {
    margin: 0.6em 0;
  }

  textarea {
    margin: 0 10px;
    width: calc(100% - 20px);
    border: none;
    background: ${props => props.theme.formInputBackground};
    padding: 12px;
    min-height: 400px;
    resize: none;
    color: #fff;
    font-size: 14px;
    transition: all 400ms ease;
    &.invalid {
      background: ${props => props.theme.formInputBackgroundInvalid};
    }
    &::placeholder {
      color: #fff;
      font-size: 14px;
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
    margin: 25px 10px;
    width: calc(100% - 20px);
    height: 80px;
    border: none;
    background: ${props => props.theme.formInputBackground};
    color: ${props => props.theme.color};
    font-size: 16px;
    cursor: pointer;
    transition: all 300ms ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
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
      <h2 className="center">Contact Me</h2>
      <KozakuraInput
        handleBlur={handleBlur}
        handleChange={handleChange}
        inputs={inputs}
        errors={errors}
        field="name"
        type="text"
      />
      <KozakuraInput
        handleBlur={handleBlur}
        handleChange={handleChange}
        inputs={inputs}
        errors={errors}
        field="email"
        type="text"
      />
      <textarea
        name="textarea"
        onBlur={handleBlur}
        onChange={handleChange}
        value={inputs.textarea}
        className={errors.textarea ? 'invalid' : undefined}
        placeholder="Send me an email ..."
      />
      <button type="submit" value="Submit">
        {!submitting && <span>Send Email</span>}
        {submitting && <ThreeDots />}
      </button>
      <ErrorNotification containsErrors={containsErrors}>invalid fields present</ErrorNotification>
    </StyledContactForm>
  );
};

export default ContactForm;
