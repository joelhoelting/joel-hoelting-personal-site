import { createGlobalStyle } from 'styled-components';
import { mediaMin } from '~/styles/mediaQueries';

const ContainerStyles = createGlobalStyle`
  .container {
    width: 90%;
    margin: 0 auto;
    ${mediaMin.tabletLandscape`
      padding: 5em 0;
    `}
  }
`;

export default ContainerStyles;
