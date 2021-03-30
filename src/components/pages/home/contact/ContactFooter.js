import React from 'react';
import styled from 'styled-components';

import SocialLinks from '../_shared/SocialLinks';

import { mediaMin } from '~/styles/mediaQueries';

import JoelHoeltingFullLogo from '~/components/images/logos/JoelHoeltingFullLogo';

const StyledContactFooter = styled.div`
  padding: 20em 0;
  svg.joel-hoelting-full-logo {
    margin: 0 auto;
    display: block;
    width: 200px;
    margin-top: 2em;
    ${mediaMin.tabletLandscape`
      margin-top: 0;
      width: 400px;
    `}
  }
  .social-links {
    margin-bottom: 2em;
    margin-top: 2em;
  }
`;

const ContactFooter = () => {
  return (
    <StyledContactFooter className="container padding">
      <JoelHoeltingFullLogo />
      <SocialLinks />
    </StyledContactFooter>
  );
};

export default ContactFooter;
