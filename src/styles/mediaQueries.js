import { css } from 'styled-components';

export const sizes = {
  phone: 375,
  phoneLarge: 414,
  phoneXL: 568,
  tablet: 768,
  tabletLandscape: 1025,
  desktopSmall: 1200,
  desktop: 1440,
  desktopLarge: 1920,
  desktopXLarge: 2048
};

// Iterate through the sizes and create a media template
const mediaQuery = minOrMax => {
  const mediaString = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (${minOrMax}-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `;

    return acc;
  }, {});

  return mediaString;
};

export const mediaMin = mediaQuery('min');
export const mediaMax = mediaQuery('max');
