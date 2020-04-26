import React, { useContext } from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import Particles from 'react-particles-js';

import Context from '~/context';

import AnimatedTitle from './AnimatedTitle';
import AnimatedButton from '~/components/buttons/AnimatedButton';
import ContinueButton from './ContinueButton';

const LandingContainer = styled(Element)`
  height: 100%;
  width: 100%;
  ${'' /* display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; */}
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
      letter-spacing: 10px;
    }
  }
`;

const Landing = () => {
  const context = useContext(Context);
  const { darkModeActive } = context;

  return (
    <LandingContainer name="landing">
      {/* {darkModeActive && (
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
      )} */}

      <div className="cta-container">
        <AnimatedTitle />
        <h2 className="subtitle light">Full Stack Web Developer</h2>
        <ContinueButton />
      </div>
    </LandingContainer>
  );
};

export default Landing;
