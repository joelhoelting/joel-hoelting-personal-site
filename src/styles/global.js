import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
    width: 100%;
  }

  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
    margin: 0;
    padding: 0;
    transition: background 300ms ease;
  }
`;

export default GlobalStyles;
