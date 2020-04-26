import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

import Bio from './Bio';
import Tech from './Tech';
import Experience from './Experience';
import Education from './Education';

import ResumeButton from './ResumeButton';
import Divider from '~/components/shared/Divider';

const AboutContainer = styled(Element)`
  min-height: 100vh;
  .about-section {
    margin: 5em auto;
  }
`;

const About = () => {
  return (
    <>
      <Divider />
      <AboutContainer name="about" className="container">
        <Bio />
        <Tech className="about-section" />
        <Experience className="about-section" />
        <Education className="about-section" />
        <div className="row row--center">
          <ResumeButton />
        </div>
      </AboutContainer>
    </>
  );
};

export default About;
