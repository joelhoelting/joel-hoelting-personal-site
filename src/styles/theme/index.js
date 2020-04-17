import variables from '../variables';

const {
  colors: { darkBlue, white }
} = variables;

const lightTheme = {
  background: white,
  color: darkBlue
};

const darkTheme = {
  background: darkBlue,
  color: white
};

export { darkTheme, lightTheme };
