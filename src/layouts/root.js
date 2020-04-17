import React from 'react';

import ContextProvider from '~/provider';

const RootLayout = ({ children }) => {
  return <ContextProvider>{children}</ContextProvider>;
};

export default RootLayout;
