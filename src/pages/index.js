import React from 'react';
import SEO from '~/components/seo';
import LandingSection from '~/components/pages/home/landing';
import SkillsSection from '~/components/pages/home/SkillsSection';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <LandingSection />
    <SkillsSection />
  </>
);

export default IndexPage;
