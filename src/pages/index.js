import React from 'react';
import SEO from '~/components/seo';
import LandingSection from '~/components/pages/home/landing';
import AboutSection from '~/components/pages/home/about';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <LandingSection />
    <AboutSection />
  </>
);

export default IndexPage;
