import React, { useState, useEffect } from 'react';
import darkModeIcon from '../assets/dark-mode-icon.svg';
import lightModeIcon from '../assets/light-mode-icon.svg';

const DarkModeButton = () => {
  const setInitialDarkMode = (): boolean => {
    const localStorageValue = window.localStorage.getItem("dark-mode");
    if (!localStorageValue) {
      const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      window.localStorage.setItem("dark-mode", JSON.stringify(darkMode));
      return darkMode;
    } else {
      return JSON.parse(localStorageValue);
    }
  };

  const [isDarkMode, setIsDarkMode] = useState<boolean>(setInitialDarkMode());

  useEffect(() => {
    document.getElementsByTagName('html')[0].classList.add(isDarkMode ? "dark-mode" : "light-mode");
    document.getElementsByTagName('html')[0].classList.remove(!isDarkMode ? "dark-mode" : "light-mode");
  }, [isDarkMode]);

  const DarkLightIcon = () => {
    if (isDarkMode) {
      return <img src={darkModeIcon} className="dark-mode-icon" alt="light-dark mode toggle" />;
    }
    return <img src={lightModeIcon} className="dark-mode-icon" alt="light-dark mode toggle" />;
  };

  const toggleLightDarkMode = () => {
    window.localStorage.setItem('dark-mode', JSON.stringify(!isDarkMode));
    setIsDarkMode(!isDarkMode);
  };

  return <button onClick={toggleLightDarkMode}>
    <DarkLightIcon />
  </button>
}
export default DarkModeButton;
