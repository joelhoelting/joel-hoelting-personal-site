import React from 'react';
import styled from 'styled-components';

import Divider from '~/components/shared/Divider';
import KozakuraInput from './KozakuraInput';

const ContactContainer = styled.div`
  min-height: 100vh;
`;

const Contact = () => {
  return (
    <>
      <Divider />
      <ContactContainer name="contact" className="container">
        <div className="row">
          <h2 className="center">Contact Me</h2>
        </div>
        <KozakuraInput />
        <KozakuraInput />
      </ContactContainer>
    </>
  );
};

export default Contact;
