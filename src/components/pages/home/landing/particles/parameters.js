import variables from '~/styles/variables';

export const darkModeParticleParams = {
  particles: {
    number: {
      value: 80,
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
};

export const lightModeParticleParams = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 1500
      }
    },
    color: {
      value: variables.colors.darkBlue
    },
    line_linked: {
      enable: true,
      opacity: 1
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
        },
        links: {
          color: {
            value: '#000'
          }
        }
      }
    }
  },
  retina_detect: true
};
