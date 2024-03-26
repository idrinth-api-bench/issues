import darkModeIcon from '../assets/dark-mode-icon.svg';
import lightModeIcon from '../assets/light-mode-icon.svg';
import React from 'react';

interface DarkLightIconType {
  isDarkMode: boolean
}

const DarkLightIcon = ({
  isDarkMode,
}: DarkLightIconType,) => {
  if (isDarkMode) {
    return <img
      src={darkModeIcon}
      className="dark-mode-icon"
      alt="light-dark mode toggle"
    />;
  }
  return <img
    src={lightModeIcon}
    className="dark-mode-icon"
    alt="light-dark mode toggle"
  />;
};

export default DarkLightIcon;
