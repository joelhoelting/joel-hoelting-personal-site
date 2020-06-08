import { createGlobalStyle } from 'styled-components';
import { mediaMin, mediaMax } from './mediaQueries';

const ResponsiveStyles = createGlobalStyle`
  .mobile {
    ${mediaMin.tabletLandscape`
      display: none !important;
    `}
  }
  .desktop {
    ${mediaMax.tabletLandscape`
      display: none !important;
    `}
  }
`;

export default ResponsiveStyles;
