import React from 'react';
import styled from 'styled-components';

const StyledSVG = styled.svg`
  height: 30px;
  width: 30px;
  fill: ${props => props.theme.color};
`;

const JoelHoeltingLogo = () => {
  return (
    <StyledSVG
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 84.78 62.91"
    >
      <title>joel_hoelting_logo</title>
      <path
        d="M37.4,49.38C37.4,68.1,22,76.65,2.67,76.65V67.56c14.3,0,25.64-5.67,25.64-18.18V22.74h-17v-9H37.4Z"
        transform="translate(-2.67 -13.74)"
      />
      <path
        d="M51.62,40.29H78.26V13.74h9.18V76.65H78.26V49.29H51.62V76.65H42.53V13.74h9.09Z"
        transform="translate(-2.67 -13.74)"
      />
    </StyledSVG>
  );
};

export default JoelHoeltingLogo;
