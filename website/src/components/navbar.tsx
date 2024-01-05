import React from 'react';
import IAB from '../assets/iab.svg';
import {
  NavLink,
} from 'react-router-dom';
import pkg from '../../../package.json' with {
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
          <NavLink to="/contributing">{'Contributing'}</NavLink>
        </li>
        <li>
          <NavLink to="/usage">{'Usage & Examples'}</NavLink>
          <ul>
            <li>
              <NavLink to="/usage/autowiring">{'Autowiring'}</NavLink>
            </li>
            <li>
              <NavLink to="/usage/results">{'Results'}</NavLink>
            </li>
            <li>
              <NavLink to="/usage/logging">{'Logging'}</NavLink>
            </li>
            <li>
              <NavLink to="/usage/middlewares">{'Middlewares'}</NavLink>
            </li>
            <li>
              <NavLink to="/usage/storage">{'Storage'}</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/imprint">{'Imprint'}</NavLink>
        </li>
      </ul>
    </nav>
  </header>
</>;
export default Navbar;
