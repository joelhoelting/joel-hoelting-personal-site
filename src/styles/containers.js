import { createGlobalStyle } from 'styled-components';
import { mediaMin } from '~/styles/mediaQueries';

const ContainerStyles = createGlobalStyle`
  .container {
    width: 80%;
    margin: 0 auto;
    padding: 2em 0;
    &.contact-container {
      width: 90%;
    }
    ${mediaMin.tabletLandscape`
      padding: 5em 0;
    `}
  }
`;

export default ContainerStyles;
