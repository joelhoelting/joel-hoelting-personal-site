import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

const AboutContainer = styled(Element)`
  height: 100%;
  width: 100%;
  background: green;
`;

const AboutSection = () => {
  return <AboutContainer name="about">About Section</AboutContainer>;
};

export default AboutSection;
