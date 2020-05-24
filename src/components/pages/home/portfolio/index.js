import React from 'react';
import styled from 'styled-components';

import { mediaMin } from '~/styles/mediaQueries';

import { StyledCategoryTitle } from '../_shared/styles';

import Divider from '~/components/shared/Divider';

import portfolioArray from '~/data/portfolio';
import PortfolioCard from './PortfolioCard';

const PortfolioContainer = styled.div`
  min-height: 100vh;
  h2 {
    margin: 2em 0;
    ${mediaMin.tabletLandscape`
      margin: 0.6em 0;
    `}
  }
`;

const PortfolioCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Portfolio = () => {
  return (
    <>
      <Divider />
      <PortfolioContainer name="portfolio" className="container portfolio-container">
        <StyledCategoryTitle className="center">Portfolio</StyledCategoryTitle>
        <PortfolioCardContainer>
          {portfolioArray.map((portfolioObj, idx) => (
            <PortfolioCard key={`portfolio-card-${idx}`} cardData={portfolioObj} />
          ))}
        </PortfolioCardContainer>
      </PortfolioContainer>
    </>
  );
};

export default Portfolio;
