import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

import AboutSection from './AboutSection';
import Divider from '~/components/shared/Divider';

const AboutContainer = styled(Element)`
  min-height: 100vh;
  position: relative;
`;

const About = () => {
  return (
    <AboutContainer name="about" className="container">
      <Divider />
      <AboutSection />
    </AboutContainer>
  );
};

export default About;
