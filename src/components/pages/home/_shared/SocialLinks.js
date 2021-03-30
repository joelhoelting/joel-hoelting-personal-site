import React from 'react';
import styled from 'styled-components';

import { mediaMin } from '~/styles/mediaQueries';

import socialData from '~/data/social';

const StyledSocialLinks = styled.div`
  display: flex;
  justify-content: center;
  .social-link {
    height: 40px;
    width: 40px;
    transition: opacity 300ms ease;
    fill: ${props => props.theme.color};
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.socialLinkBackground};
    border-radius: 50%;
    margin: 0 10px;
    ${mediaMin.tabletLandscape`
      height: 80px;
      width: 80px;
      margin: 0 20px;
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
`;

const SocialLinks = () => {
  return (
    <StyledSocialLinks className="social-links">
      {socialData.map(socialObj => {
        const { url, icon } = socialObj;

        return (
          <a href={url} target="_blank" rel="noopener noreferrer" className="social-link">
            {icon}
          </a>
        );
      })}
    </StyledSocialLinks>
  );
};

export default SocialLinks;
