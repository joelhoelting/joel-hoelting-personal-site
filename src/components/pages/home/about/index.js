import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

import Bio from './Bio';
import Tech from './Tech';
import Experience from './Experience';
import Education from './Education';

import AnimatedButton from '~/components/buttons/AnimatedButton';
import AnimatedButtonMobile from '~/components/buttons/AnimatedButtonMobile';
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
      <AnimatedButtonMobile buttonText="Download Resume" />
    </ResumeLink>
  );
};

const About = () => {
  return (
    <>
      <Divider />
      <div name="about" className="container padding-bottom">
        <Bio />
        <Divider />
        <Tech />
        <Experience />
        <Education />
        <div className="row row--center">
          <ResumeButton />
        </div>
      </div>
    </>
  );
};

export default About;
