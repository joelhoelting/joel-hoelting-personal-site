import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import styled from 'styled-components';

import Context from '~/context';

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  background: grey;
`;

const Header = () => {
  const context = useContext(Context);
  const { toggleDarkMode } = context;

  return (
    <StyledHeader>
      <h1>Header Element</h1>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </StyledHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
