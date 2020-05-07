import { createGlobalStyle } from 'styled-components';
import { sizes } from './mediaQueries';

const ResponsiveStyles = createGlobalStyle`
  .mobile {
    @media only screen and (min-width: ${sizes.tabletLandscape}px) {
      display: none;
    }
  }
  .desktop {
    @media only screen and (max-width: ${sizes.tabletLandscape}px) {
      display: none;
    }
  }
`;

export default ResponsiveStyles;
