import React from 'react';
import styled from 'styled-components';

import Divider from '~/components/shared/Divider';
import ContactForm from './ContactForm';

const ContactContainer = styled.div`
  min-height: 100%;
  display: flex;
  align-items: center;
`;

const Contact = () => {
  return (
    <>
      <Divider />
      <ContactContainer name="contact" className="container contact-container">
        <ContactForm />
      </ContactContainer>
    </>
  );
};

export default Contact;
