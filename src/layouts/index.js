/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Context from '~/context';

import { darkTheme, lightTheme } from '~/styles/theme';
import { ContainerStyles, FontStyles, GlobalStyles, TypographyStyles } from '~/styles';

import Header from '~/components/includes/header';

// if (typeof window !== 'undefined') {
//   // eslint-disable-next-line global-require
//   require('smooth-scroll')('a[href*="#"]', {
//     speed: 1000,
//     speedAsDuration: true
//   });
// }

const GlobalCSS = () => {
  return (
    <>
      <ContainerStyles />
      <FontStyles />
      <GlobalStyles />
      <TypographyStyles />
    </>
  );
};

const Layout = ({ children }) => {
  const context = useContext(Context);
  const { darkModeActive } = context;

  return (
    <ThemeProvider theme={darkModeActive ? darkTheme : lightTheme}>
      <GlobalCSS />
      <Header />
      <main style={{ height: '100%' }}>
        <div className="container">{children}</div>
      </main>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
