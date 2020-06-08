import React, { useContext } from 'react';
import styled from 'styled-components';

import Context from '~/context';

import { mediaMin } from '~/styles/mediaQueries';

const StyledButton = styled.button`
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-left: 2em;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  background: ${props => props.theme.darkModeButtonBackground};
  &:hover {
    ${mediaMin.tabletLandscape`
      background: ${props => props.theme.darkModeButtonHoverBackground};
    `}
  }

  svg {
    display: block;
    stroke: ${props => props.theme.darkModeButtonStrokeColor};
    height: 20px;
    width: 20px;
    fill: ${props => props.theme.darkModeButtonFillColor};
    stroke-width: 2px;
    line {
      opacity: ${props => (props.darkModeActive ? 0 : 1)};
    }
    #sun {
      opacity: ${props => (props.darkModeActive ? 0.2 : 1)};
    }
    #moon {
      opacity: ${props => (props.darkModeActive ? 1 : 0)};
    }
  }
`;

const DarkModeButton = () => {
  const context = useContext(Context);
  const { darkModeActive, toggleDarkMode } = context;

  return (
    <StyledButton className="desktop" darkModeActive={darkModeActive} onClick={toggleDarkMode}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
        <g id="sun">
          <line x1="17" x2="17" y2="6" />
          <line x1="17" y1="28" x2="17" y2="34" />
          <line y1="17" x2="6" y2="17" />
          <line x1="28" y1="16.5" x2="34" y2="16.5" />
          <line x1="4.24" y1="5.14" x2="8.48" y2="9.39" />
          <line x1="25.76" y1="24.74" x2="30.01" y2="28.98" />
          <line x1="8.62" y1="24.74" x2="4.38" y2="28.98" />
          <line x1="30.01" y1="5.14" x2="25.76" y2="9.39" />
          <circle cx="17" cy="17" r="10" />
        </g>
        <g id="moon">
          <path
            d="M20,10a10.19,10.19,0,0,0-1.68.15,10,10,0,0,1-.68,19.56A10.23,10.23,0,0,0,20,30a10,10,0,0,0,0-20Z"
            transform="translate(-3 -3)"
          />
        </g>
      </svg>
    </StyledButton>
  );
};

export default DarkModeButton;
