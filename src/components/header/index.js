import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import Context from '~/context';

import routes from '~/data/routes';
import { mediaMin } from '~/styles/mediaQueries';

import JoelHoeltingLogo from '~/components/images/logos/JoelHoeltingLogo';

import ResumeLink from '~/components/links/ResumeLink';

const StyledHeader = styled.header`
  position: ${props => props.position};
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  padding: 0 1em;
  background: ${props =>
    props.position === 'absolute' ? 'transparent' : props.theme.headerBackground};
  transition: transform 300ms ease, opacity 300ms ease;
  transform: ${props => (props.visible ? 'translateX(0%)' : 'translateY(-100%)')};
  opacity: ${props => (props.visible ? 1 : 0)};

  .landing-link {
    display: flex;
    opacity: 0.8;
    transition: opacity 300ms ease;
    &:hover {
      ${mediaMin.tabletLandscape`
        opacity: 1;
      `}
    }
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
          opacity: ${props => (props.position === 'absolute' ? 0.8 : 0.5)};
          font-size: 0.8em;
          &.active {
            opacity: 1;
          }
          &:hover {
            ${mediaMin.tabletLandscape`
              opacity: 1;
            `}
          }
        }
      }
    }
  }
`;

const Header = ({ position }) => {
  const context = useContext(Context);
  const { particlesActive, setParticlesActive } = context;

  const [activeElement, setActiveElement] = useState('landing');

  const handleAnchorLinkChange = route => {
    // Disable particles when scrolling below landing section
    if (route !== 'landing' && particlesActive) {
      setParticlesActive(false);
    }

    if (route === 'landing' && !particlesActive) {
      setParticlesActive(true);
    }

    setActiveElement(route);
  };

  const generateLinks = () => {
    let links = routes.map(route => (
      <li key={`${route}-link`}>
        <Link
          href={`#${route}`}
          to={route}
          spy
          smooth
          duration={600}
          onSetActive={e => {
            if (position === 'fixed') {
              handleAnchorLinkChange(e);
            }
          }}
          className="bold"
        >
          {route}
        </Link>
      </li>
    ));

    links.push(
      <li key={`resume-link`} className="desktop">
        <ResumeLink className="bold">Resume</ResumeLink>
      </li>
    );

    return links;
  };

  return (
    <StyledHeader
      position={position}
      visible={position === 'absolute' ? true : activeElement !== 'landing'}
    >
      <Link
        href={`#landing`}
        to="landing"
        spy
        smooth
        duration={600}
        onSetActive={e => {
          if (position === 'fixed') {
            handleAnchorLinkChange(e);
          }
        }}
        className="landing-link"
      >
        <JoelHoeltingLogo position={position} />
      </Link>
      {/* <button onClick={toggleDarkMode}>Toggle Dark Mode</button> */}
      <nav>
        <ul>{generateLinks()}</ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
