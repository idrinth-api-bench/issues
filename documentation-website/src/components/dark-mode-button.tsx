import React, {
  useState, useEffect,
} from 'react';
import {
  IoSunny,
  IoMoon,
} from 'react-icons/io5';
import {
  FIRST_ELEMENT,
} from '../constants';

const DarkModeButton = ({
  window,
}: {window: Window},) => {
  const setInitialDarkMode = (): boolean => {
    const localStorageValue = window.localStorage.getItem('dark-mode',);
    if (localStorageValue) {
      return JSON.parse(localStorageValue,);
    }
    const darkMode = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    window.localStorage.setItem('dark-mode', JSON.stringify(darkMode,),);
    return darkMode;
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

  return <button className="theme-toggle-btn"
    onClick={toggleLightDarkMode}
  >
    {isDarkMode ? <IoSunny /> : <IoMoon />}
  </button>;
};
export default DarkModeButton;
