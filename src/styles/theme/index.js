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
  continueBtnFill: 'rgba(255, 255, 255, 0.05)'
};

export { darkTheme, lightTheme };
