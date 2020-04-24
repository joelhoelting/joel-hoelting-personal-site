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
  const localStorageThemeValue = window.localStorage.getItem('darkModeActive');

  const [darkModeActive, setdarkModeActive] = useState(!!JSON.parse(localStorageThemeValue));

  const toggleDarkMode = () => {
    window.localStorage.setItem('darkModeActive', !darkModeActive);
    setdarkModeActive(!darkModeActive);
  };

  // useEffect(() => {
  //   const localStorageThemeValue = window.localStorage.getItem('darkModeActive');
  //   if (localStorageThemeValue) {
  //     setdarkModeActive(JSON.parse(localStorageThemeValue));
  //   } else {
  //     window.localStorage.setItem('darkModeActive', darkModeActive);
  //   }
  // }, []);

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
