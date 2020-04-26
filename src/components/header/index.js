import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import Context from '~/context';

import routes from '~/data/routes';

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  ${'' /* background: grey; */}
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`;

const generateLinks = () =>
  routes.map(route => (
    <li key={`${route}-link`}>
      <Link href={`#${route}`} to={route} spy hashSpy smooth duration={600}>
        {route}
      </Link>
    </li>
  ));

const Header = () => {
  const context = useContext(Context);
  const { toggleDarkMode } = context;

  return (
    <StyledHeader>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <nav>
        <ul>{generateLinks()}</ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;