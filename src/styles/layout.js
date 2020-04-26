import { createGlobalStyle } from 'styled-components';

const LayoutStyles = createGlobalStyle`
  .row {
    display: flex;
    width: 100%;
    &.row--center {
      align-items: center;
      justify-content: center;
    }
  }
`;

export default LayoutStyles;
