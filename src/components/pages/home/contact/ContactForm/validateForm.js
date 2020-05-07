import { validateEmail } from '~/helpers/validations';

const validateForm = values => {
  let errors = {};

  const { name, email, textarea } = values;

  const checkName = () => {
    if (name.length < 3) {
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

  checkName();
  checkEmail();
  checkMessage();

  return errors;
};

export default validateForm;
