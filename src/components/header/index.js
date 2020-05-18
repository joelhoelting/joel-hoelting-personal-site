import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

// import Context from '~/context';

import routes from '~/data/routes';
import JoelHoeltingLogo from '~/components/images/logos/JoelHoeltingLogo';

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  padding: 0 1em;
  background: ${props => props.theme.headerBackground};
  transition: transform 300ms ease;
  transform: ${props => (props.visible ? 'translateX(0%)' : 'translateY(-100%)')};
  .landing-link {
    display: flex;
  }
  nav {
    ul {
      display: flex;
      li {
        margin-left: 1em;
        text-transform: uppercase;
        a {
          letter-spacing: 2px;
          transition: opacity 300ms ease;
          opacity: 0.5;
          font-size: 0.8em;
          &.active {
            opacity: 1;
          }
        }
      }
    }
  }
`;

const Header = () => {
  // const context = useContext(Context);
  // const { toggleDarkMode } = context;

  const [activeElement, setActiveElement] = useState('landing');

  const generateLinks = () =>
    routes.map(route => (
      <li key={`${route}-link`}>
        <Link
          href={`#${route}`}
          to={route}
          spy
          smooth
          duration={600}
          onSetActive={e => setActiveElement(e)}
          className="bold"
        >
          {route}
        </Link>
      </li>
    ));

  return (
    <StyledHeader visible={activeElement !== 'landing'}>
      <Link
        href={`#landing`}
        to="landing"
        spy
        smooth
        duration={600}
        onSetActive={e => setActiveElement(e)}
        className="landing-link"
      >
        <JoelHoeltingLogo />
      </Link>
      {/* <button onClick={toggleDarkMode}>Toggle Dark Mode</button> */}

      <nav>
        <ul>{generateLinks()}</ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
