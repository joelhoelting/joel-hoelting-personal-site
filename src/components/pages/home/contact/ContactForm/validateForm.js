import { validateEmail } from '~/helpers/validations';

const validateForm = (values, targetName = false) => {
  let errors = {};

  const { name, email, textarea } = values;

  const checkName = () => {
    if (!name || name.length < 3) {
      errors.name = true;
    }
  };

  const checkEmail = () => {
    if (!email || !validateEmail(email)) {
      errors.email = true;
    }
  };

  const checkMessage = () => {
    if (textarea.length < 5) {
      errors.textarea = true;
    }
  };

  if (!targetName) {
    checkName();
    checkEmail();
    checkMessage();
  }

  switch (targetName) {
    case 'name':
      checkName();
      break;
    case 'email':
      checkEmail();
      break;
    case 'textarea':
      checkMessage();
      break;
    default:
      break;
  }

  return errors;
};

export default validateForm;
