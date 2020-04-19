import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

import AnimatedTitle from './AnimatedTitle';
import ContinueButton from './ContinueButton';

const LandingContainer = styled(Element)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 32px;
  h2.subtitle {
    margin: 0.5em 0;
    letter-spacing: 10px;
  }
`;

const LandingSection = () => {
  return (
    <LandingContainer name="landing">
      <AnimatedTitle />
      <h2 className="subtitle light">Full Stack Web Developer</h2>
      <ContinueButton />
    </LandingContainer>
  );
};

export default LandingSection;
