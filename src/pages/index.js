import React from 'react';
import SEO from '~/components/seo';
import Landing from '~/components/pages/home/landing';
import About from '~/components/pages/home/about';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Landing />
    <About />
  </>
);

export default IndexPage;
