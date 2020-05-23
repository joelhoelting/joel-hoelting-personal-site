import { useState } from 'react';

import validateForm from './validateForm';

const FormLogic = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    textarea: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    textarea: false
  });

  const [submitting, setSubmitting] = useState(false);
  const [submissionAttempted, setSubmissionAttempted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();

    setSubmitting(true);
    const { name, email, textarea } = inputs;

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

    const emailBody = {
      to: 'joelhoelting@protonmail.com',
      subject: `joelhoelting.com: ${name}`,
      from: 'joelhoelting.com',
      message: `Joel, you have a new email from: ${email}\n\n${textarea}`
    };

    fetch('https://api.joelhoelting.com/aws/email/send-ses-email', {
      method: 'POST',
      body: JSON.stringify(emailBody), // data can be `string` or {object}
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        setTimeout(() => {
          setSubmitting(false);
          setSubmitted(true);
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
    console.log(event.target.name, event.target.value);
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
    submitting
  };
};

export default FormLogic;
