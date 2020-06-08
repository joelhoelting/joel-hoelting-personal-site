/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';

import Context from '~/context';

// export to createContext() -- '~/context'
export const defaultState = {
  darkModeActive: true,
  toggleDarkMode: () => {},
  particlesActive: true,
  setParticlesActive: () => {}
};

const ContextProvider = props => {
  const [darkModeActive, setdarkModeActive] = useState(false);
  const [particlesActive, setParticlesActive] = useState(true);

  const toggleDarkMode = () => {
    setdarkModeActive(!darkModeActive);
  };

  return (
    <Context.Provider
      value={{
        ...props,
        darkModeActive,
        toggleDarkMode,
        particlesActive,
        setParticlesActive
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default ContextProvider;
