import React from 'react';
import styled from 'styled-components';

import { cycleBorderColors } from '~/styles/animations';

const PortfolioCardContainer = styled.div`
  width: 46%;
  margin: 2%;
  border-width: 2px;
  border-style: solid;
  animation: 6s linear infinite ${cycleBorderColors};
  padding: 2em;
  .title {
    margin-bottom: 1em;
    letter-spacing: 2px;
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
