import React from 'react';
import styled from 'styled-components';

import Divider from '~/components/shared/Divider';

const PortfolioContainer = styled.div`
  min-height: 100vh;
`;

const Portfolio = () => {
  return (
    <>
      <Divider />
      <PortfolioContainer name="portfolio" className="container">
        <h1>Hello World</h1>
      </PortfolioContainer>
    </>
  );
};

export default Portfolio;
