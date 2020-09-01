import { useState } from 'react';

import validateForm from './validateForm';

const FormLogic = () => {
  const defaultFormState = {
    name: '',
    email: '',
    textarea: '',
    address: ''
  };

  const [inputs, setInputs] = useState(defaultFormState);

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    textarea: false
  });

  const [submitting, setSubmitting] = useState(false);
  const [submissionAttempted, setSubmissionAttempted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const resetForm = () => {
    setInputs(defaultFormState);

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Encapsulates all expected behavior when form submits successfully
    const submissionSuccessActions = () => {
      setSubmissionAttempted(false);
      setSubmitting(false);
      setSubmitted(true);
    };

    setSubmitting(true);
    const { name, email, textarea, address } = inputs;

    const formErrors = validateForm(inputs);
    setErrors(formErrors);

    // Create breadcrumb of failed form submission
    if (Object.values(formErrors).includes(true)) {
      setSubmitting(false);
      if (!submissionAttempted) {
        setSubmissionAttempted(true);
      }
      return;
    }

    // My little honey pot
    if (address) {
      setTimeout(() => {
        submissionSuccessActions();
      }, 1000);
      return;
    }

    const emailBody = {
      to: 'joel@joelhoelting.com',
      subject: `New message from joelhoelting.com: ${name}`,
      from: 'joelhoelting.com',
      message: `
        Name: ${name}\n
        Email: ${email}\n
        Message: ${textarea}
      `
    };

    const apiRootUrlDir = {
      development: 'http://localhost:3001',
      production: 'https://api.joelhoelting.com'
    };

    fetch(`${apiRootUrlDir[process.env.NODE_ENV]}/aws/email/send-ses-email`, {
      method: 'POST',
      body: JSON.stringify(emailBody), // data can be `string` or {object}
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        setTimeout(() => {
          submissionSuccessActions();
        }, 1000);
      })
      // eslint-disable-next-line
      .catch(error => {
        setSubmitting(false);
        console.error('Error:', error);
      });
  };

  const handleChange = event => {
    event.persist();
    const newInputs = { ...inputs, [event.target.name]: event.target.value };
    setInputs(newInputs);

    if (submissionAttempted) {
      Object.values(errors).includes(true);
      const newError = validateForm(newInputs);
      setErrors(newError);
    }
  };

  return {
    handleChange,
    handleSubmit,
    inputs,
    errors,
    submitted,
    submitting,
    resetForm
  };
};

export default FormLogic;
