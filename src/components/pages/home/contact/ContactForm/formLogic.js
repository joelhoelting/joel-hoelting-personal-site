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

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();

    setSubmitting(true);
    const { name, email, textarea } = inputs;

    const formErrors = validateForm(inputs);
    setErrors(formErrors);

    // const emailBody = {
    //   to: 'joelhoelting@protonmail.com',
    //   subject: `joelhoelting.com: ${name}`,
    //   from: 'joelhoelting.com',
    //   message: `Joel, you have a new email from: ${email}\n\n${textarea}`
    // };

    // fetch('http://localhost:3001/aws/email/send-ses-email', {
    //   method: 'POST',
    //   body: JSON.stringify(emailBody), // data can be `string` or {object}
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    //   .then(res => {})
    //   // eslint-disable-next-line
    //   .catch(error => console.error('Error:', error));
  };

  const handleChange = event => {
    event.persist();
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
  };

  const handleBlur = e => {
    const newError = validateForm(inputs, e.target.name);
    setErrors(newError);
  };

  return {
    handleBlur,
    handleChange,
    handleSubmit,
    inputs,
    errors,
    submitted,
    submitting
  };
};

export default FormLogic;
