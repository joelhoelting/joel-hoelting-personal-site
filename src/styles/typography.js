import { createGlobalStyle } from 'styled-components';

const TypographyStyles = createGlobalStyle`
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Code Bold';
    letter-spacing: 6px;
    &.light {
      font-family: 'Code Light';
    }
  }

  h1 { font-size: 2em; }
  h2 { font-size: 1.5em; }
  h3 { font-size: 1.3em; }
  h4 { font-size: 1em; }
  h5 { font-size: 0.8em; }
  h6 { font-size: 0.7em; }

  p, button, a, li, input, label, textarea, span {
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 1px;
    line-height: 1.4em;
  }

  a {
    color: ${props => props.theme.color};
    text-decoration: none;
  }

  .center {
    text-align: center;
  }

  .uppercase {
    text-transform: uppercase;
  }
`;

export default TypographyStyles;
