import React from 'react';
import styled from 'styled-components';

import GithubIcon from '~/assets/images/icons/GithubIcon';
import LinkedinIcon from '~/assets/images/icons/LinkedinIcon';
import MailIcon from '~/assets/images/icons/MailIcon';

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
    display: flex;
    justify-content: center;
    margin-bottom: 2em;
    margin-top: 2em;
    ${mediaMin.tabletLandscape`
      margin-bottom: 2em;
      margin-top: 5em;
    `}
    .social-link {
      height: 40px;
      width: 40px;
      transition: opacity 300ms ease;
      fill: ${props => props.theme.color};
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${props => props.theme.socialLinkBackground};
      border-radius: 10px;
      margin: 0 1em;
      ${mediaMin.tabletLandscape`
        height: 60px;
        width: 60px;
        margin: 0 2em;
        opacity: .8;
        &:hover {
          opacity: 1;
        }
      `}

      svg {
        width: 20px;
        ${mediaMin.tabletLandscape`
          width: 30px;
        `}
      }
    }
  }
`;

const ContactFooter = () => {
  return (
    <StyledContactFooter className="container padding">
      <JoelHoeltingFullLogo />
      <div className="social-links">
        <a
          href="https://github.com/joelhoelting"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <GithubIcon />
        </a>
        <a
          href="https://github.com/joelhoelting"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <MailIcon />
        </a>
        <a
          href="https://github.com/joelhoelting"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <LinkedinIcon />
        </a>
      </div>
    </StyledContactFooter>
  );
};

export default ContactFooter;
