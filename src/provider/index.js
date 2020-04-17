/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import Context from '~/context';

const ContextProvider = props => {
  const [darkModeActive, setdarkModeActive] = useState(true);

  const toggleDarkMode = () => {
    window.localStorage.setItem('darkTheme', !darkModeActive);
    setdarkModeActive(!darkModeActive);
  };

  useEffect(() => {
    const localStorageThemeValue = window.localStorage.getItem('darkTheme');
    if (localStorageThemeValue) {
      setdarkModeActive(JSON.parse(localStorageThemeValue));
    } else {
      window.localStorage.setItem('darkTheme', darkModeActive);
    }
  }, []);

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
