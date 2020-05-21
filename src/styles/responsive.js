import { createGlobalStyle } from 'styled-components';
import { mediaMin, mediaMax } from './mediaQueries';

const ResponsiveStyles = createGlobalStyle`
  .mobile {
    ${mediaMin.tabletLandscape`
      display: none;
    `}
  }
  .desktop {
    ${mediaMax.tabletLandscape`
      display: none;
    `}
  }
`;

export default ResponsiveStyles;
