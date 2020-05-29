import styled from 'styled-components';
import { mediaMin } from '~/styles/mediaQueries';

export const StyledCategoryTitle = styled.h3`
  padding: 2em 0;
  text-align: center;
  ${mediaMin.tabletLandscape`
    font-size: 1.6em;
    padding: 4em 0 2em;
  `}
`;
