import React from 'react';
import styled from 'styled-components';

import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const BioWrapper = styled.div`
  padding: 6em 0;
  display: flex;
  align-items: center;
  .photo {
    width: 50%;
    padding: 0 10%;
    .gatsby-image-wrapper {
      border: 1px solid white;
    }
  }
  .summary {
    width: 50%;
    p {
      max-width: 500px;
    }
  }
`;

const Bio = () => {
  const portraitImgData = useStaticQuery(graphql`
    query {
      portraitImage: file(relativePath: { eq: "joel_hoelting_portrait.jpg" }) {
        id
        childImageSharp {
          fluid {
            base64
            aspectRatio
            sizes
            src
            srcSet
          }
        }
      }
    }
  `);

  return (
    <BioWrapper>
      <div className="photo">
        <Img fluid={portraitImgData.portraitImage.childImageSharp.fluid} alt="Joel Hoelting" />
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
