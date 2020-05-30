import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import Particles from 'react-particles-js';

import Context from '~/context';

import { mediaMax } from '~/styles/mediaQueries';
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
    h2.subtitle {
      margin: 0.5em 0;
      font-size: 1em;
      ${mediaMax.tabletLandscape`
        display: none;
      `}
    }
  }
`;

const Landing = () => {
  const context = useContext(Context);
  const { particlesActive } = context;

  const [continueButtonVisible, setContinueButtonVisible] = useState(false);

  useEffect(() => {
    let buttonVisibleTimer = setTimeout(() => {
      setContinueButtonVisible(true);
    }, 1000);

    return () => {
      clearTimeout(buttonVisibleTimer);
    };
  });

  return (
    <LandingContainer name="landing">
      {particlesActive && (
        <Particles
          params={{
            particles: {
              number: {
                value: 60,
                density: {
                  enable: true,
                  value_area: 1500
                }
              },
              line_linked: {
                enable: true,
                opacity: 0.02
              },
              move: {
                speed: 1,
                attract: {
                  enable: true,
                  rotateX: 3000,
                  rotateY: 3000
                }
              },
              size: {
                value: 2
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.05
                }
              }
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: 'grab'
                }
              },
              modes: {
                grab: {
                  distance: 180,
                  line_linked: {
                    opacity: 0.5
                  }
                }
              }
            },
            retina_detect: true
          }}
        />
      )}
      <div className="cta-container">
        <AnimatedTitle />
        <AnimatedTitleMobile />
        <h2 className="subtitle light">Full Stack Web Developer</h2>
        <ContinueButton visible={continueButtonVisible} />
        <ContinueButtonMobile />
      </div>
    </LandingContainer>
  );
};

export default Landing;
