import { keyframes } from 'styled-components';

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
