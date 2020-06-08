import variables from '../variables';

const {
  colors: { darkBlue, white }
} = variables;

const lightTheme = {
  background: white,
  landingCTABackground: white,
  color: darkBlue,
  inverseColor: white,
  headerBackground: white,
  continueBtnFill: 'rgba(0, 0, 0, 0.05)',
  kozuraInputFocusColor: darkBlue,
  formInputBackground: darkBlue,
  formInputBackgroundFocus: '#88a4ff',
  formInputBackgroundInvalid: '#960200',
  formSubmitBtnColor: white,
  socialLinkBackground: 'rgba(0,0,0,.1)',
  darkModeButtonStrokeColor: darkBlue,
  darkModeButtonFillColor: 'none',
  darkModeButtonBackground: 'rgba(0,0,0,.1)',
  darkModeButtonHoverBackground: 'rgba(0,0,0,.2)'
};

const darkTheme = {
  background: darkBlue,
  landingCTABackground: 'none',
  color: white,
  inverseColor: darkBlue,
  headerBackground: '#474982',
  continueBtnFill: 'rgba(255, 255, 255, 0.05)',
  kozuraInputFocusColor: white,
  formInputBackground: '#657ed4',
  formInputBackgroundFocus: '#88a4ff',
  formInputBackgroundInvalid: '#960200',
  formSubmitBtnColor: white,
  socialLinkBackground: 'rgba(255,255,255,.1)',
  darkModeButtonStrokeColor: white,
  darkModeButtonFillColor: white,
  darkModeButtonBackground: 'rgba(255,255,255,.05)',
  darkModeButtonHoverBackground: 'rgba(255,255,255,.2)'
};

export { darkTheme, lightTheme };
