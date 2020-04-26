import React from 'react';
import styled from 'styled-components';

import Divider from '~/components/shared/Divider';

const ContactContainer = styled.div`
  min-height: 100vh;
`;

const Contact = () => {
  return (
    <>
      <Divider />
      <ContactContainer name="contact" className="container">
        <h1>Contact Form</h1>
      </ContactContainer>
    </>
  );
};

export default Contact;
