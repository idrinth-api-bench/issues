import React, {
  useEffect,
  useState,
} from 'react';
import IAB from '../assets/iab.svg';
import {
  NavLink,
} from 'react-router-dom';
import pkg from '../../package.json' with {
  type: 'json'
};
import {
  Lang,
} from './lang.tsx';
import DarkModeButton from './dark-mode-button.tsx';
import SocialLink from './social-link.tsx';
import {
  MdArrowDropDown,
} from 'react-icons/md';

const breakpointResolution: number = 1080;

const Header = ({
  window,
}: {window: Window},) => {
  const [
    windowWidth,
    setWindowWidth,
  ] = useState(window.innerWidth,);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth,);
    };

    window.addEventListener('resize', handleResize,);

    return () => {
      window.removeEventListener('resize', handleResize,);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [],);

  return (
    <header>
      <div className="logo-container">
        <div>
          <img src={IAB} alt="@idrinth/api-bench" />
          <div className="logo-title-wrapper">
            <strong className="logo-title">@idrinth/api-bench</strong>
            <em className="version">v{pkg.version}</em>
          </div>
        </div>
        <DarkModeButton window={window} />
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink to="/"><Lang lnkey='home.nav' /></NavLink>
          </li>
          <li>
            <NavLink to="/quick-start/">
              <Lang lnkey='quick-start.nav' />
            </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-links-heading" to="/contributing/">
              <Lang lnkey='contributing.nav' />
              <MdArrowDropDown />
            </NavLink>
            <ul className="links-list">
              <li>
                <NavLink
                  className="nav-dropdown-link"
                  to="/contributing/contributors/"
                >
                  <Lang lnkey='contributors.nav' />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-dropdown-link"
                  to="/contributing/sponsors/"
                >
                  <Lang lnkey='sponsors.nav' />
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink className="dropdown-links-heading" to="/usage/">
              <Lang lnkey='usage.nav' />
              <MdArrowDropDown />
            </NavLink>
            <ul className="links-list">
              <li>
                <NavLink
                  className="nav-dropdown-link"
                  to="/usage/autowiring/"
                >
                  <Lang lnkey='autowiring.nav'/>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-dropdown-link"
                  to="/usage/results/"
                >
                  <Lang lnkey='results.nav' />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-dropdown-link"
                  to="/usage/logging/"
                >
                  <Lang lnkey='logging.nav' />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-dropdown-link"
                  to="/usage/middlewares/"
                >
                  <Lang lnkey='middlewares.nav' />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-dropdown-link"
                  to="/usage/storage/"
                >
                  <Lang lnkey='storage.nav' />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-dropdown-link"
                  to="/usage/routes/"
                >
                  <Lang lnkey='routes.nav' />
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <nav className="external-links">
        {windowWidth < breakpointResolution &&
          <p className="dropdown-links-heading">
            Links <MdArrowDropDown />
          </p>}
        <ul className="links-list">
          <SocialLink
            to="https://www.npmjs.com/package/@idrinth/api-bench"
            label={'npm'}
          />
          <SocialLink
            to="https://github.com/Idrinth/api-bench"
            label={'github'}
          />
          <SocialLink
            to="https://www.linkedin.com/groups/9588634/"
            label={'linkedin'}
          />
          <SocialLink
            to={
              'https://idrinth-api-bench.slack.com/' +
              'join/shared_invite/' +
              'zt-2f4zmw2sz-c3etHzCFq3LtZpkR15xXMA' +
              '#/shared-invite/email'
            }
            label={'slack'}
          />
        </ul>
      </nav>
      <DarkModeButton window={window} />
    </header>);
};
export default Header;
