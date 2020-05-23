import { createGlobalStyle } from 'styled-components';
import { mediaMin } from '~/styles/mediaQueries';

const ContainerStyles = createGlobalStyle`
  .container {
    width: 80%;
    margin: 0 auto;
    ${mediaMin.tabletLandscape`
      width: 90%;
      padding: 5em 0;
    `}
  }
`;

export default ContainerStyles;
