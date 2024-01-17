import React from 'react';
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

const Navbar = () => <>
  <header>
    <div>
      <img src={IAB} alt="@idrinth/api-bench"/>
      <strong>@idrinth/api-bench</strong>
      <em>v{pkg.version}</em>
    </div>
    <nav>
      <ul>
        <li>
          <NavLink to="/"><Lang lnkey='home.nav'/></NavLink>
        </li>
        <li>
          <a
            href=" https://www.npmjs.com/package/@idrinth/api-bench"
            target="_blank"
          >
            NPMJS
          </a>
        </li>
        <li>
          <a href="https://github.com/Idrinth/api-bench" target="_blank">
            GITHUB
          </a>
        </li>
        <li>
          <NavLink to="/contributing/">
            <Lang lnkey='contributing.nav'/>
          </NavLink>
        </li>
        <li>
          <NavLink to="/usage/">
            <Lang lnkey='usage.nav'/>
          </NavLink>
          <ul>
            <li>
              <NavLink to="/usage/autowiring/">
                <Lang lnkey='autowiring.nav'/>
              </NavLink>
            </li>
            <li>
              <NavLink to="/usage/results/">
                <Lang lnkey='results.nav'/>
              </NavLink>
            </li>
            <li>
              <NavLink to="/usage/logging/">
                <Lang lnkey='logging.nav'/>
              </NavLink>
            </li>
            <li>
              <NavLink to="/usage/middlewares/">
                <Lang lnkey='middlewares.nav'/>
              </NavLink>
            </li>
            <li>
              <NavLink to="/usage/storage/">
                <Lang lnkey='storage.nav'/>
              </NavLink>
            </li>
            <li>
              <NavLink to="/usage/routes/">
                <Lang lnkey='routes.nav'/>
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</>;
export default Navbar;
