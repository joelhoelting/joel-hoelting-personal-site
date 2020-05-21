import { keyframes } from 'styled-components';

export const drawLine = keyframes`
  25% {
    fill-opacity: 0;
  }

  60% {
    fill-opacity: 1;
  }

  100% {
    fill-opacity: 1;
    stroke-dashoffset: 0;
  }
`;

export const cycleBorderColors = keyframes`
  0% {
    border-color: #ED1C24;
  }

  20% {
    border-color: #D8D8D8;
  }

  60% {
    border-color: #9067C6;
  }

  80% {
    border-color: #1B998B;
  }

  100% {
    border-color: #ED1C24;
  }
`;

export const cycleStrokeColors = keyframes`
  0% {
    stroke: #ED1C24;
  }

  20% {
    stroke: #D8D8D8;
  }

  60% {
    stroke: #9067C6;
  }

  80% {
    stroke: #1B998B;
  }

  100% {
    stroke: #ED1C24;
  }
`;

export const threeDotsBounceDelay = keyframes`
  0%, 80%, 100% { 
    transform: scale(0);
  } 
    
  40% { 
      transform: scale(1.0);
    }
  }
`;
