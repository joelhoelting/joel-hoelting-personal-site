import React from 'react';
import styled from 'styled-components';

import { threeDotsBounceDelay } from '~/styles/animations';

const ThreeDotsWrapper = styled.div`
  & > div {
    width: 14px;
    height: 14px;
    margin: 0 2px;
    background-color: ${props => props.theme.color};

    border-radius: 100%;
    display: inline-block;
    animation: 1.4s infinite ease-in-out both ${threeDotsBounceDelay};

    &:nth-of-type(1) {
      animation-delay: -0.32s;
    }

    &:nth-of-type(2) {
      animation-delay: -0.16s;
    }
  }
`;

const ThreeDots = () => {
  return (
    <ThreeDotsWrapper className="three-dots-spinner">
      <div></div>
      <div></div>
      <div></div>
    </ThreeDotsWrapper>
  );
};

export default ThreeDots;
