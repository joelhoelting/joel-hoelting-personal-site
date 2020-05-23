import React from 'react';
import styled from 'styled-components';

import { cycleBorderColors } from '~/styles/animations';

import { mediaMin } from '~/styles/mediaQueries';

const PortfolioCardContainer = styled.div`
  width: 100%;
  border-width: 2px;
  border-style: solid;
  animation: 6s linear infinite ${cycleBorderColors};
  margin: 1em 0;
  padding: 1em;
  ${mediaMin.tabletLandscape`
    margin: 0.6em 0;
    padding: 2em;
    width: 46%;
    margin: 2%;
  `}

  .title {
    margin-bottom: 1em;
    letter-spacing: 2px;
    font-size: 0.8em;
    ${mediaMin.tabletLandscape`
      font-size: 1em;
    `}
  }

  .description {
    font-size: 0.8em;
    margin: 0.5em 0;
  }

  .stack {
    font-size: 0.8em;
    opacity: 0.5;
  }

  .source-button {
    display: inline-block;
    margin-top: 2em;
    margin-right: 1em;
    padding: 0.4em 1em;
    border: 1px solid ${props => props.theme.color};
    transition: all 300ms ease;
    font-size: 0.8em;
    cursor: pointer;
    &:hover {
      background: ${props => props.theme.color};
      color: ${props => props.theme.inverseColor};
    }
  }
`;

const PortfolioCard = ({ cardData }) => {
  const { title, description, stack, github, website } = cardData;
  return (
    <PortfolioCardContainer>
      <p className="bold title">{title}</p>
      <p className="description">{description}</p>
      <p className="stack italic">{stack}</p>
      <a className="source-button" href={github} target="_blank" rel="noopener noreferrer">
        Github
      </a>
      <a className="source-button" href={website} target="_blank" rel="noopener noreferrer">
        Website
      </a>
    </PortfolioCardContainer>
  );
};

export default PortfolioCard;
