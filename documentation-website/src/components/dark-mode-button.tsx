import React, {
  useState, useEffect,
} from 'react';
import {
  FIRST_ELEMENT,
} from '../constants';
import DarkLightIcon from './dark-light-icon.tsx';

const DarkModeButton = ({
  window,
}: {window: Window},) => {
  const setInitialDarkMode = (): boolean => {
    const localStorageValue = window.localStorage.getItem('dark-mode',);
    if (! localStorageValue) {
      const darkMode = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      window.localStorage.setItem('dark-mode', JSON.stringify(darkMode,),);
      return darkMode;
    } else {
      return JSON.parse(localStorageValue,);
    }
  };

  const [
    isDarkMode,
    setIsDarkMode,
  ] = useState<boolean>(setInitialDarkMode(),);

  useEffect(() => {
    document.getElementsByTagName('html',)[FIRST_ELEMENT].classList.add(
      isDarkMode ? 'dark-mode' : 'light-mode',
    );
    document.getElementsByTagName('html',)[FIRST_ELEMENT].classList.remove(
      ! isDarkMode ? 'dark-mode' : 'light-mode',
    );
  }, [ isDarkMode, ],);

  const toggleLightDarkMode = () => {
    window.localStorage.setItem('dark-mode', JSON.stringify(! isDarkMode,),);
    setIsDarkMode(! isDarkMode,);
  };

  return <button onClick={toggleLightDarkMode}>
    <DarkLightIcon isDarkMode={isDarkMode}/>
  </button>;
};
export default DarkModeButton;
