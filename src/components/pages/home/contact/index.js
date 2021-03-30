import React from 'react';

import Divider from '../_shared/Divider';
import ContactForm from './ContactForm';
import ContactFooter from './ContactFooter';

const Contact = () => {
  return (
    <>
      <Divider />
      <div name="contact" className="container contact-container padding-bottom">
        <ContactForm />
      </div>
      <Divider />
      <ContactFooter />
    </>
  );
};

export default Contact;
