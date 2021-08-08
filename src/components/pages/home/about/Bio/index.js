import React from 'react';
import styled from 'styled-components';

import { StaticImage } from 'gatsby-plugin-image';

import { mediaMin } from '~/styles/mediaQueries';

const BioWrapper = styled.div`
  padding: 2em 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  ${mediaMin.tabletLandscape`
    padding: 5em 0;
    flex-direction: row;
  `}
  .photo {
    width: 100%;
    max-width: 400px;
    ${mediaMin.tabletLandscape`
      max-width: none;
      padding: 0 10%;
      width: 50%;
    `}
    .gatsby-image-wrapper {
      border: 1px solid white;
    }
  }
  .summary {
    width: 100%;
    max-width: 400px;
    margin-top: 2em;
    ${mediaMin.tabletLandscape`
      margin-top: none;
      max-width: none;
      width: 50%;
    `}
    p {
      max-width: 500px;
    }
  }
`;

const Bio = () => {
  return (
    <BioWrapper>
      <div className="photo">
        <StaticImage src="./joel_hoelting_portrait.jpg" alt="Joel Hoelting" />
      </div>
      <div className="summary">
        <p>
          I am a NYC-based full stack software engineer and AWS certified cloud practioner. I
          graduated from the Flatiron School in NYC where I gained a strong foundation in functional
          and object-oriented programming. I know multiple frameworks and languages, including Ruby,
          Python, Javascript and PHP. I love learning new technologies and enjoy adapting to shifts
          in the industry. My developer ethos: always be learning and always be coding.
        </p>
      </div>
    </BioWrapper>
  );
};

export default Bio;
