import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

import Bio from './Bio';
import Tech from './Tech';
import Experience from './Experience';
import Education from './Education';

import AnimatedButton from '~/components/buttons/AnimatedButton';
import Divider from '~/components/shared/Divider';

import ResumePDF from '~/assets/pdf/joel_hoelting_resume_2020.pdf';

const ResumeButton = () => {
  return (
    <a href={ResumePDF} target="_blank" rel="noopener noreferrer">
      <AnimatedButton
        buttonText="Download Resume"
        fontSize="1em"
        strokeWidth={6}
        hoverStrokeWidth={12}
        width={400}
      />
    </a>
  );
};

const AboutContainer = styled(Element)`
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
        <Divider />
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
