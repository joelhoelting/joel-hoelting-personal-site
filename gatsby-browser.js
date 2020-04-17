/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react';
import RootLayout from '~/layouts/root';

export const wrapRootElement = ({ element }) => <RootLayout>{element}</RootLayout>;
