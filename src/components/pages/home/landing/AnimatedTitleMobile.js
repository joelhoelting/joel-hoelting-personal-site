import React from 'react';
import styled from 'styled-components';

import { drawLine } from '~/styles/animations';

const StyledSVG = styled.svg`
  max-width: 1000px;
  stroke-width: 2;
  width: 100%;
  margin: 1em 0;
  max-width: 400px;
  path {
    stroke: ${props => props.theme.color};
    fill: ${props => props.theme.color};
    animation: 4s linear forwards ${drawLine};
    fill-opacity: 0;
    stroke-dasharray: 1500;
    stroke-dashoffset: 1500;
  }
  &.visible path {
    animation: 4s linear forwards ${drawLine};
  }
`;

const AnimatedMobileTitle = ({ visible }) => {
  return (
    <StyledSVG
      className={`mobile ${visible && 'visible'}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1288.2 622.7"
    >
      <title>Joel Hoelting</title>
      <path
        id="J"
        d="M453,210.9c0,69.6-57.2,101.4-129.1,101.4V278.5c53.2,0,95.3-21.1,95.3-67.6v-99H356V78.4h97Z"
        transform="translate(-43.6 -73.6)"
        fill="none"
        stroke="#24255d"
      />
      <path
        id="O"
        d="M501.2,110.5a118.6,118.6,0,0,1,84.3-35.5c33.1,0,62.9,13.7,84.6,35.5S705,162.1,705,195.2s-13.7,62.9-34.8,84.6a118.3,118.3,0,0,1-168.9,0c-21.1-21.7-34.8-51.5-34.8-84.6S480.1,132.3,501.2,110.5Zm144.9,24.1a86.1,86.1,0,0,0-60.6-25.4,84,84,0,0,0-59.9,25.4,85.6,85.6,0,0,0,0,121.1,84,84,0,0,0,59.9,25.4,86.1,86.1,0,0,0,60.6-146.5Z"
        transform="translate(-43.6 -73.6)"
        fill="none"
        stroke="#24255d"
      />
      <path
        id="E"
        d="M758.8,278.5H867.6v33.8H724.7V78.4H867.2v33.8H758.8v65.9H864.9v34.1H758.8Z"
        transform="translate(-43.6 -73.6)"
        fill="none"
        stroke="#24255d"
      />
      <path
        id="L"
        d="M918.1,278.5h110.1v33.8H884.3V78.4h33.8Z"
        transform="translate(-43.6 -73.6)"
        fill="none"
        stroke="#24255d"
      />
      <path
        id="H"
        d="M78.9,556.6h99V457.9h34.1V691.8H178V590.1h-99V691.8H45.1V457.9H78.9Z"
        transform="translate(-43.6 -73.6)"
        fill="none"
        stroke="#24255d"
      />
      <path
        id="O-2"
        data-name="O"
        d="M227.8,574.7c0-33.1,13.7-62.9,34.8-84.6a118.6,118.6,0,0,1,84.3-35.5c33.1,0,62.9,13.7,84.6,35.5s34.8,51.5,34.8,84.6-13.7,62.9-34.8,84.6a118.3,118.3,0,0,1-168.9,0C241.5,637.6,227.8,607.8,227.8,574.7Zm204.4,0a85.7,85.7,0,0,0-85.3-86A84,84,0,0,0,287,514.1a85.6,85.6,0,0,0,0,121.1,84,84,0,0,0,59.9,25.4,85.7,85.7,0,0,0,85.3-86ZM317.5,415.1c-10.4,0-18.4,6.7-18.4,16.7,0,8,8,16.1,18.4,16.1s19.4-8,19.4-16.1C336.9,421.8,328.8,415.1,317.5,415.1Zm61.6,0c-10.4,0-18.7,6.7-18.7,16.7,0,8,8.4,16.1,18.7,16.1s19.4-8,19.4-16.1C398.4,421.8,390.7,415.1,379,415.1Z"
        transform="translate(-43.6 -73.6)"
        fill="none"
        stroke="#24255d"
      />
      <path
        id="L-2"
        data-name="L"
        d="M522.9,658H633v33.8H489.1V457.9h33.8Z"
        transform="translate(-43.6 -73.6)"
        fill="none"
        stroke="#24255d"
      />
      <path
        id="T"
        d="M661.1,692.8V489H590.1V457.6H765.4V489H694.9V692.8Z"
        transform="translate(-43.6 -73.6)"
        fill="none"
        stroke="#24255d"
      />
      <path
        id="I"
        d="M897.9,491.4H854.4V658h43.5v33.8H777.2V658h43.5V491.4H777.2V457.9H897.9Z"
        transform="translate(-43.6 -73.6)"
        fill="none"
        stroke="#24255d"
      />
      <path
        id="N"
        d="M913,691.8V457.2l26.1.3,114.1,164.9V457.6h33.5V691.8h-26.8L946.8,528.2V691.8Z"
        transform="translate(-43.6 -73.6)"
        fill="none"
        stroke="#24255d"
      />
      <path
        id="G"
        d="M1292.4,541.6c-9.4-37.8-45.5-51.5-75.3-51.5-45.8,0-81.3,35.8-81.3,85s35.5,86,81.3,86c28.8,0,59.5-13.4,73.6-47.5H1204V579.7h126.1c-1.7,19.7-3.3,32.8-6.4,40.5v-.3c-16.1,44.8-64.2,73.6-106.7,73.6-65.6,0-115.1-49.5-115.1-118.4s50.5-118.8,115.1-118.8c44.8,0,99,23.1,111.4,85.3Z"
        transform="translate(-43.6 -73.6)"
        fill="none"
        stroke="#24255d"
      />
    </StyledSVG>
  );
};

export default AnimatedMobileTitle;
