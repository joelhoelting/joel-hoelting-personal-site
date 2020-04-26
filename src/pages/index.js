import React from 'react';
import SEO from '~/components/seo';
import Landing from '~/components/pages/home/landing';
import About from '~/components/pages/home/about';
import Portfolio from '~/components/pages/home/portfolio';
import Contact from '~/components/pages/home/contact';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Landing />
    <About />
    <Portfolio />
    <Contact />
  </>
);

export default IndexPage;
