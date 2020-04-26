import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import Context from '~/context';

import routes from '~/data/routes';
import JoelHoeltingLogo from '~/components/images/logos/JoelHoeltingLogo';

const StyledHeader = styled.header`
  position: absolute;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  padding: 0 1em;
  nav {
    ul {
      display: flex;
      li {
        margin-left: 1em;
        text-transform: uppercase;
      }
    }
  }
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
      <JoelHoeltingLogo />
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <nav>
        <ul>{generateLinks()}</ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
