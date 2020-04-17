import { createGlobalStyle } from 'styled-components';

// Code
import CodeLightOTF from '~/assets/fonts/Code/Code-Light.otf';
import CodeLightWOFF from '~/assets/fonts/Code/Code-Light.woff';
import CodeLightWOFF2 from '~/assets/fonts/Code/Code-Light.woff2';

import CodeBoldOTF from '~/assets/fonts/Code/Code-Bold.otf';
import CodeBoldWOFF from '~/assets/fonts/Code/Code-Bold.woff';
import CodeBoldWOFF2 from '~/assets/fonts/Code/Code-Bold.woff2';

// Jaldi
import JaldiRegularTTF from '~/assets/fonts/Jaldi/Jaldi-Bold.ttf';
import JaldiRegularWOFF from '~/assets/fonts/Jaldi/Jaldi-Bold.woff';
import JaldiRegularWOFF2 from '~/assets/fonts/Jaldi/Jaldi-Bold.woff2';

import JaldiBoldTTF from '~/assets/fonts/Jaldi/Jaldi-Regular.ttf';
import JaldiBoldWOFF from '~/assets/fonts/Jaldi/Jaldi-Regular.woff';
import JaldiBoldWOFF2 from '~/assets/fonts/Jaldi/Jaldi-Regular.woff2';

// Montserrat
import MontserratThinTTF from '~/assets/fonts/Montserrat/Montserrat-Thin.ttf';
import MontserratThinWOFF from '~/assets/fonts/Montserrat/Montserrat-Thin.woff';
import MontserratThinWOFF2 from '~/assets/fonts/Montserrat/Montserrat-Thin.woff2';

import MontserratThinItalicTTF from '~/assets/fonts/Montserrat/Montserrat-ThinItalic.ttf';
import MontserratThinItalicWOFF from '~/assets/fonts/Montserrat/Montserrat-ThinItalic.woff';
import MontserratThinItalicWOFF2 from '~/assets/fonts/Montserrat/Montserrat-ThinItalic.woff2';

import MontserratExtraLightTTF from '~/assets/fonts/Montserrat/Montserrat-ExtraLight.ttf';
import MontserratExtraLightWOFF from '~/assets/fonts/Montserrat/Montserrat-ExtraLight.woff';
import MontserratExtraLightWOFF2 from '~/assets/fonts/Montserrat/Montserrat-ExtraLight.woff2';

import MontserratExtraLightItalicTTF from '~/assets/fonts/Montserrat/Montserrat-ExtraLightItalic.ttf';
import MontserratExtraLightItalicWOFF from '~/assets/fonts/Montserrat/Montserrat-ExtraLightItalic.woff';
import MontserratExtraLightItalicWOFF2 from '~/assets/fonts/Montserrat/Montserrat-ExtraLightItalic.woff2';

import MontserratLightTTF from '~/assets/fonts/Montserrat/Montserrat-Light.ttf';
import MontserratLightWOFF from '~/assets/fonts/Montserrat/Montserrat-Light.woff';
import MontserratLightWOFF2 from '~/assets/fonts/Montserrat/Montserrat-Light.woff2';

import MontserratLightItalicTTF from '~/assets/fonts/Montserrat/Montserrat-LightItalic.ttf';
import MontserratLightItalicWOFF from '~/assets/fonts/Montserrat/Montserrat-LightItalic.woff';
import MontserratLightItalicWOFF2 from '~/assets/fonts/Montserrat/Montserrat-LightItalic.woff2';

import MontserratRegularTTF from '~/assets/fonts/Montserrat/Montserrat-Regular.ttf';
import MontserratRegularWOFF from '~/assets/fonts/Montserrat/Montserrat-Regular.woff';
import MontserratRegularWOFF2 from '~/assets/fonts/Montserrat/Montserrat-Regular.woff2';

import MontserratMediumTTF from '~/assets/fonts/Montserrat/Montserrat-Medium.ttf';
import MontserratMediumWOFF from '~/assets/fonts/Montserrat/Montserrat-Medium.woff';
import MontserratMediumWOFF2 from '~/assets/fonts/Montserrat/Montserrat-Medium.woff2';

import MontserratMediumItalicTTF from '~/assets/fonts/Montserrat/Montserrat-MediumItalic.ttf';
import MontserratMediumItalicWOFF from '~/assets/fonts/Montserrat/Montserrat-MediumItalic.woff';
import MontserratMediumItalicWOFF2 from '~/assets/fonts/Montserrat/Montserrat-MediumItalic.woff2';

import MontserratSemiBoldTTF from '~/assets/fonts/Montserrat/Montserrat-SemiBold.ttf';
import MontserratSemiBoldWOFF from '~/assets/fonts/Montserrat/Montserrat-SemiBold.woff';
import MontserratSemiBoldWOFF2 from '~/assets/fonts/Montserrat/Montserrat-SemiBold.woff2';

import MontserratSemiBoldItalicTTF from '~/assets/fonts/Montserrat/Montserrat-SemiBoldItalic.ttf';
import MontserratSemiBoldItalicWOFF from '~/assets/fonts/Montserrat/Montserrat-SemiBoldItalic.woff';
import MontserratSemiBoldItalicWOFF2 from '~/assets/fonts/Montserrat/Montserrat-SemiBoldItalic.woff2';

import MontserratBoldTTF from '~/assets/fonts/Montserrat/Montserrat-Bold.ttf';
import MontserratBoldWOFF from '~/assets/fonts/Montserrat/Montserrat-Bold.woff';
import MontserratBoldWOFF2 from '~/assets/fonts/Montserrat/Montserrat-Bold.woff2';

import MontserratBoldItalicTTF from '~/assets/fonts/Montserrat/Montserrat-BoldItalic.ttf';
import MontserratBoldItalicWOFF from '~/assets/fonts/Montserrat/Montserrat-BoldItalic.woff';
import MontserratBoldItalicWOFF2 from '~/assets/fonts/Montserrat/Montserrat-BoldItalic.woff2';

import MontserratExtraBoldTTF from '~/assets/fonts/Montserrat/Montserrat-ExtraBold.ttf';
import MontserratExtraBoldWOFF from '~/assets/fonts/Montserrat/Montserrat-ExtraBold.woff';
import MontserratExtraBoldWOFF2 from '~/assets/fonts/Montserrat/Montserrat-ExtraBold.woff2';

import MontserratExtraBoldItalicTTF from '~/assets/fonts/Montserrat/Montserrat-ExtraBoldItalic.ttf';
import MontserratExtraBoldItalicWOFF from '~/assets/fonts/Montserrat/Montserrat-ExtraBoldItalic.woff';
import MontserratExtraBoldItalicWOFF2 from '~/assets/fonts/Montserrat/Montserrat-ExtraBoldItalic.woff2';

import MontserratBlackTTF from '~/assets/fonts/Montserrat/Montserrat-Black.ttf';
import MontserratBlackWOFF from '~/assets/fonts/Montserrat/Montserrat-Black.woff';
import MontserratBlackWOFF2 from '~/assets/fonts/Montserrat/Montserrat-Black.woff2';

import MontserratBlackItalicTTF from '~/assets/fonts/Montserrat/Montserrat-BlackItalic.ttf';
import MontserratBlackItalicWOFF from '~/assets/fonts/Montserrat/Montserrat-BlackItalic.woff';
import MontserratBlackItalicWOFF2 from '~/assets/fonts/Montserrat/Montserrat-BlackItalic.woff2';

export default createGlobalStyle`
    ${'' /* Code */}
    @font-face {
      font-family: 'Code Light';
      src: url(${CodeLightOTF}) format('otf'), 
           url(${CodeLightWOFF}) format('woff'),
           url(${CodeLightWOFF2}) format('woff2');
      font-weight: 300;
      font-style: normal;
    }

    @font-face {
      font-family: 'Code Bold';
      src: url(${CodeBoldOTF}) format('otf'), 
           url(${CodeBoldWOFF}) format('woff'),
           url(${CodeBoldWOFF2}) format('woff2');
      font-weight: 300;
      font-style: normal;
    }

    ${'' /* Jaldi */}
    @font-face {
      font-family: 'Jaldi';
      src: url(${JaldiRegularTTF}) format('ttf'),
           url(${JaldiRegularWOFF}) format('woff'),
           url(${JaldiRegularWOFF2}) format('woff2');
      font-weight: 400;
      font-style: normal;
    }

    @font-face {
      font-family: 'Jaldi';
      src: url(${JaldiBoldTTF}) format('ttf'),
           url(${JaldiBoldWOFF}) format('woff'),
           url(${JaldiBoldWOFF2}) format('woff2');
      font-weight: 700;
      font-style: normal;
    }

    ${'' /* Montserrat */}
    @font-face {
      font-family: 'Montserrat';
      src: url(${MontserratThinTTF}) format('ttf'),
           url(${MontserratThinWOFF}) format('woff'),
           url(${MontserratThinWOFF2}) format('woff2');
      font-weight: 100;
      font-style: normal;
    }

    @font-face {
      font-family: 'Montserrat';
      src: url(${MontserratThinItalicTTF}) format('ttf'),
           url(${MontserratThinItalicWOFF}) format('woff'),
           url(${MontserratThinItalicWOFF2}) format('woff2');
      font-weight: 100;
      font-style: italic;
    }

    @font-face {
      font-family: 'Montserrat';
      src: url(${MontserratExtraLightTTF}) format('ttf'),
           url(${MontserratExtraLightWOFF}) format('woff'),
           url(${MontserratExtraLightWOFF2}) format('woff2');
      font-weight: 200;
      font-style: normal;
    }

    @font-face {
      font-family: 'Montserrat';
      src: url(${MontserratExtraLightItalicTTF}) format('ttf'),
           url(${MontserratExtraLightItalicWOFF}) format('woff'),
           url(${MontserratExtraLightItalicWOFF2}) format('woff2');
      font-weight: 200;
      font-style: normal;
    }

    @font-face {
      font-family: 'Montserrat';
      src: url(${MontserratLightTTF}) format('ttf'),
           url(${MontserratLightWOFF}) format('woff'),
           url(${MontserratLightWOFF2}) format('woff2');
      font-weight: 300;
      font-style: normal;
    }

    @font-face {
      font-family: 'Montserrat';
      src: url(${MontserratLightItalicTTF}) format('ttf'),
           url(${MontserratLightItalicWOFF}) format('woff'),
           url(${MontserratLightItalicWOFF2}) format('woff2');
      font-weight: 300;
      font-style: italic;
    }

    @font-face {
      font-family: 'Montserrat';
      src: url(${MontserratRegularTTF}) format('ttf'),
           url(${MontserratRegularWOFF}) format('woff'),
           url(${MontserratRegularWOFF2}) format('woff2');
      font-weight: 400;
      font-style: normal;
    }

    @font-face {
      font-family: 'Montserrat';
      src: url(${MontserratMediumTTF}) format('ttf'),
           url(${MontserratMediumWOFF}) format('woff'),
           url(${MontserratMediumWOFF2}) format('woff2');
      font-weight: 500;
      font-style: italic;
    }

    @font-face {
      font-family: 'Montserrat';
      src: url(${MontserratMediumItalicTTF}) format('ttf'),
           url(${MontserratMediumItalicWOFF}) format('woff'),
           url(${MontserratMediumItalicWOFF2}) format('woff2');
      font-weight: 500;
      font-style: italic;
    }

    @font-face {
      font-family: 'Montserrat';
      src: url(${MontserratSemiBoldTTF}) format('ttf'),
           url(${MontserratSemiBoldWOFF}) format('woff'),
           url(${MontserratSemiBoldWOFF2}) format('woff2');
      font-weight: 600;
      font-style: normal;
    }

    @font-face {
      font-family: 'Montserrat';
      src: url(${MontserratSemiBoldItalicTTF}) format('ttf'),
           url(${MontserratSemiBoldItalicWOFF}) format('woff'),
           url(${MontserratSemiBoldItalicWOFF2}) format('woff2');
      font-weight: 600;
      font-style: italic;
    }

    @font-face {
      font-family: 'Montserrat';
      src: url(${MontserratBoldTTF}) format('ttf'),
           url(${MontserratBoldWOFF}) format('woff'),
           url(${MontserratBoldWOFF2}) format('woff2');
      font-weight: 700;
      font-style: normal;
    }

    @font-face {
      font-family: 'Montserrat';
      src: url(${MontserratBoldItalicTTF}) format('ttf'),
           url(${MontserratBoldItalicWOFF}) format('woff'),
           url(${MontserratBoldItalicWOFF2}) format('woff2');
      font-weight: 700;
      font-style: italic;
    }

    @font-face {
      font-family: 'Montserrat';
      src: url(${MontserratExtraBoldTTF}) format('ttf'),
           url(${MontserratExtraBoldWOFF}) format('woff'),
           url(${MontserratExtraBoldWOFF2}) format('woff2');
      font-weight: 800;
      font-style: normal;
    }

    @font-face {
      font-family: 'Montserrat';
      src: url(${MontserratExtraBoldItalicTTF}) format('ttf'),
           url(${MontserratExtraBoldItalicWOFF}) format('woff'),
           url(${MontserratExtraBoldItalicWOFF2}) format('woff2');
      font-weight: 800;
      font-style: italic;
    }
    
    @font-face {
      font-family: 'Montserrat';
      src: url(${MontserratBlackTTF}) format('ttf'),
           url(${MontserratBlackWOFF}) format('woff'),
           url(${MontserratBlackWOFF2}) format('woff2');
      font-weight: 900;
      font-style: normal;
    }

    @font-face {
      font-family: 'Montserrat';
      src: url(${MontserratBlackItalicTTF}) format('ttf'),
           url(${MontserratBlackItalicWOFF}) format('woff'),
           url(${MontserratBlackItalicWOFF2}) format('woff2');
      font-weight: 900;
      font-style: italic;
    }
`;
