import React, { useContext, useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import Particles from 'react-particles-js';

import Context from '~/context';

import { darkModeParticleParams, lightModeParticleParams } from './particles/parameters';
import AnimatedTitle from './AnimatedTitle';
import AnimatedTitleMobile from './AnimatedTitleMobile';
import ContinueButton from './ContinueButton';
import ContinueButtonMobile from './ContinueButtonMobile';

const LandingContainer = styled(Element)`
  height: 100%;
  width: 100%;
  font-size: 32px;
  position: relative;
  #tsparticles {
    height: 100%;
    width: 100%;
    position: absolute;
  }
  .cta-container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 60%;
    background: ${props => props.theme.landingCTABackground};
    h2.subtitle {
      margin: 0.5em 0;
      font-size: 1em;
      opacity: 0;
      transition: opacity 300ms ease;
      &.visible {
        opacity: 1;
      }
    }
  }
`;

const Landing = () => {
  const particlesRef = useRef();

  const context = useContext(Context);
  const { darkModeActive, particlesActive } = context;

  const particleParams = darkModeActive ? darkModeParticleParams : lightModeParticleParams;

  const [continueButtonVisible, setContinueButtonVisible] = useState(false);
  const [animatedTitleVisible, setAnimatedTitleVisible] = useState(false);

  useEffect(() => {
    let animatedTitleVisibleTimer = setTimeout(() => {
      setAnimatedTitleVisible(true);
    }, 1000);

    let buttonVisibleTimer = setTimeout(() => {
      setContinueButtonVisible(true);
    }, 3000);

    return () => {
      clearTimeout(buttonVisibleTimer);
      clearTimeout(animatedTitleVisibleTimer);
    };
  });

  React.useEffect(() => {
    const current = particlesRef.current;

    if (particlesActive) {
      setTimeout(() => {
        current.play();
      });
    } else {
      setTimeout(() => {
        current.pause();
      });
    }
  }, [particlesRef, particlesActive]);

  return (
    <LandingContainer name="landing">
      <Particles params={particleParams} particlesRef={particlesRef} />
      <div
        className="cta-container"
        style={{ transition: !darkModeActive ? '300ms ease background 300ms' : 'none' }}
      >
        <AnimatedTitle visible={animatedTitleVisible} />
        <AnimatedTitleMobile visible={animatedTitleVisible} />
        <h2 className={`subtitle light desktop ${continueButtonVisible && 'visible'}`}>
          Full Stack Web Developer
        </h2>
        <ContinueButton visible={continueButtonVisible} />
        <ContinueButtonMobile visible={continueButtonVisible} />
      </div>
    </LandingContainer>
  );
};

export default Landing;
