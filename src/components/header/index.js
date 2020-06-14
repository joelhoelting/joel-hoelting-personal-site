import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import Context from '~/context';

import routes from '~/data/routes';
import { mediaMin } from '~/styles/mediaQueries';

import JoelHoeltingLogo from '~/components/images/logos/JoelHoeltingLogo';
import ResumeLink from '~/components/links/ResumeLink';
import DarkModeButton from '~/components/buttons/DarkModeButton';

const StyledHeader = styled.header`
  position: ${props => props.position};
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  padding: 0 1em;
  background: ${props =>
    props.position === 'absolute' ? 'transparent' : props.theme.headerBackground};
  box-shadow: ${props => (props.position === 'absolute' ? 'none' : `3px 3px 5px rgba(0,0,0,.2)`)};
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
    &.active {
      opacity: 1;
    }
  }

  nav {
    ul {
      display: flex;
      li {
        margin-left: 1em;
        text-transform: uppercase;
        display: flex;
        align-items: center;
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

  const [headerVisible, setHeaderVisible] = useState(false);

  const handleAnchorLinkChange = route => {
    // Disable particles when scrolling below landing section
    if (route !== 'landing' && particlesActive) {
      setParticlesActive(false);
    }

    if (route === 'landing' && !particlesActive) {
      setParticlesActive(true);
    }

    setHeaderVisible(route !== 'landing');
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
          offset={-40}
          onSetActive={e => handleAnchorLinkChange(e)}
          className="bold"
        >
          {route}
        </Link>
      </li>
    ));

    links.push(
      <li key="resume-link" className="desktop">
        <ResumeLink className="bold">Resume</ResumeLink>
      </li>
    );

    links.push(<DarkModeButton key="dark-mode-button" />);

    return links;
  };

  return (
    <StyledHeader position={position} visible={position === 'absolute' ? true : headerVisible}>
      <Link
        href={`#landing`}
        to="landing"
        spy
        smooth
        duration={600}
        offset={-40}
        onSetActive={e => handleAnchorLinkChange(e)}
        className="landing-link"
      >
        <JoelHoeltingLogo position={position} />
      </Link>
      <nav>
        <ul>{generateLinks()}</ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
