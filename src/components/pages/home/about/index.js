import React from 'react';

import Bio from './Bio';
import Tech from './Tech';
import Experience from './Experience';
import Education from './Education';

import ResumeButton from '~/components/buttons/ResumeButton';
import Divider from '../_shared/Divider';

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
