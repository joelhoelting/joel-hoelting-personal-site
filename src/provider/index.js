/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import Context from '~/context';

// export to createContext() -- '~/context'
export const defaultState = {
  darkModeActive: true,
  toggleDarkMode: () => {}
};

const ContextProvider = props => {
  const [darkModeActive, setdarkModeActive] = useState(true);

  const toggleDarkMode = () => {
    setdarkModeActive(!darkModeActive);
  };

  return (
    <Context.Provider
      value={{
        ...props,
        darkModeActive,
        toggleDarkMode
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default ContextProvider;
