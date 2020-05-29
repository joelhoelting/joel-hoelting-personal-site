import { createGlobalStyle } from 'styled-components';
import { mediaMin } from '~/styles/mediaQueries';

const ContainerStyles = createGlobalStyle`
  .container {
    width: 85%;
    margin: 0 auto;
    ${mediaMin.tabletLandscape`
      width: 80%;
    `}
    &.contact-container {
      width: 90%;
    }
    &.portfolio-container {
      width: 90%;
      ${mediaMin.tabletLandscape`
        width: 80%;
      `}
    }
    &.padding-bottom {
      padding-bottom: 1em;
      ${mediaMin.tabletLandscape`
        padding-bottom: 4em;
      `}
    }
    &.padding-top {
      padding-top: 1em;
      ${mediaMin.tabletLandscape`
        padding-top: 4em;
      `}
    }
    &.padding {
      padding: 1em 0;
      ${mediaMin.tabletLandscape`
        padding: 4em 0;
      `}
    }
  }
`;

export default ContainerStyles;
