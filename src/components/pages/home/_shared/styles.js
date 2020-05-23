import styled from 'styled-components';
import { mediaMin } from '~/styles/mediaQueries';

export const StyledCategoryTitle = styled.h3`
  margin: 2em 0;
  ${mediaMin.tabletLandscape`
    font-size: 1.6em;
    margin: 2em 0;
  `}
`;
