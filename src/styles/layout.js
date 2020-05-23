import { createGlobalStyle } from 'styled-components';
import { mediaMin } from '~/styles/mediaQueries';

const LayoutStyles = createGlobalStyle`
  .row {
    display: flex;
    width: 100%;
    &.row--center {
      align-items: center;
      justify-content: center;
    }
    &.row--column-mobile {
      flex-direction: column;
      ${mediaMin.tabletLandscape`
        flex-direction: row;
      `}
    }
  }
`;

export default LayoutStyles;
