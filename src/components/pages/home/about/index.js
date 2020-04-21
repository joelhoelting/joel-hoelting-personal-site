import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

import Bio from './Bio';
import Tech from './Tech';
import Divider from '~/components/shared/Divider';

const AboutContainer = styled(Element)`
  min-height: 100vh;
`;

const About = () => {
  return (
    <>
      <Divider />
      <AboutContainer name="about" className="container">
        <Bio />
        <Tech />
      </AboutContainer>
    </>
  );
};

export default About;
