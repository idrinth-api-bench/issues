import React, { useState, useEffect } from 'react';
import IAB from '../assets/iab.svg';
import darkModeIcon from '../assets/dark-mode-icon.svg';
import lightModeIcon from '../assets/light-mode-icon.svg';
import {
  NavLink,
} from 'react-router-dom';
import pkg from '../../package.json' with {
  type: 'json'
};
import {
  Lang,
} from './lang.tsx';
import ExternalLink from './external-link.tsx';


const Navbar = () => {
  const setInitialDarkMode = (): boolean => {
    const localStorageValue = window.localStorage.getItem("dark-mode");
    if (!localStorageValue) {
      const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      window.localStorage.setItem("dark-mode", JSON.stringify(darkMode))
      return darkMode
    } else {
      return JSON.parse(localStorageValue);
    }
  }

  const [isDarkMode, setIsDarkMode] = useState<boolean>(setInitialDarkMode());

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

  useEffect(() => {
    document.getElementsByTagName('html')[0].classList.add(isDarkMode ? "dark-mode" : "light-mode");
    document.getElementsByTagName('html')[0].classList.remove(!isDarkMode ? "dark-mode" : "light-mode");
  }, [isDarkMode]);

  return <>
    <header>
      <div>
        <img src={IAB} alt="@idrinth/api-bench" />
        <strong>@idrinth/api-bench</strong>
        <em>v{pkg.version}</em>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/"><Lang lnkey='home.nav' /></NavLink>
          </li>
          <li>
            <NavLink to="/quick-start/">
              <Lang lnkey='quick-start.nav' />
            </NavLink>
          </li>
          <li>
            <ExternalLink
              to="https://www.npmjs.com/package/@idrinth/api-bench"
              label={'NPMJS'}
            />
          </li>
          <li>
            <ExternalLink
              to="https://github.com/Idrinth/api-bench"
              label={'GITHUB'}
            />
          </li>
          <li>
            <ExternalLink
              to="https://www.linkedin.com/groups/9588634/"
              label={'LINKEDIN'}
            />
          </li>
          <li>
            <NavLink to="/contributing/">
              <Lang lnkey='contributing.nav' />
            </NavLink>
            <ul>
              <li>
                <NavLink to="/contributing/contributors/">
                  <Lang lnkey='contributors.nav' />
                </NavLink>
              </li>
              <li>
                <NavLink to="/contributing/sponsors/">
                  <Lang lnkey='sponsors.nav' />
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/usage/">
              <Lang lnkey='usage.nav' />
            </NavLink>
            <ul>
              <li>
                <NavLink to="/usage/autowiring/">
                  <Lang lnkey='autowiring.nav' />
                </NavLink>
              </li>
              <li>
                <NavLink to="/usage/results/">
                  <Lang lnkey='results.nav' />
                </NavLink>
              </li>
              <li>
                <NavLink to="/usage/logging/">
                  <Lang lnkey='logging.nav' />
                </NavLink>
              </li>
              <li>
                <NavLink to="/usage/middlewares/">
                  <Lang lnkey='middlewares.nav' />
                </NavLink>
              </li>
              <li>
                <NavLink to="/usage/storage/">
                  <Lang lnkey='storage.nav' />
                </NavLink>
              </li>
              <li>
                <NavLink to="/usage/routes/">
                  <Lang lnkey='routes.nav' />
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <button onClick={toggleLightDarkMode}>
        <DarkLightIcon />
      </button>
    </header>
  </>;
}
export default Navbar;
