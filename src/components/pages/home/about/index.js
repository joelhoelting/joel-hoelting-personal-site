import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

import Bio from './Bio';
import Tech from './Tech';
import Experience from './Experience';
import Education from './Education';

import AnimatedButton from '~/components/buttons/AnimatedButton';
import Divider from '~/components/shared/Divider';

import ResumeLink from '~/components/links/ResumeLink';

const ResumeButton = () => {
  return (
    <ResumeLink>
      <AnimatedButton
        buttonText="Download Resume"
        fontSize="1em"
        strokeWidth={6}
        hoverStrokeWidth={12}
        width={400}
      />
    </ResumeLink>
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
