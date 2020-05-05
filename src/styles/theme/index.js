import variables from '../variables';

const {
  colors: { darkBlue, white }
} = variables;

const lightTheme = {
  background: white,
  color: darkBlue,
  continueBtnFill: 'rgba(0, 0, 0, 0.05)'
};

const darkTheme = {
  background: darkBlue,
  color: white,
  continueBtnFill: 'rgba(255, 255, 255, 0.05)',
  formInputBackground: '#657ed4',
  formInputBackgroundFocus: '#88a4ff',
  formInputBackgroundInvalid: '#960200'
};

export { darkTheme, lightTheme };
