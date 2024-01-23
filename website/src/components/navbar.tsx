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
import ExternalLink from './external-link.tsx';

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
          <ExternalLink
            to=" https://www.npmjs.com/package/@idrinth/api-bench"
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
          <NavLink to="/contributing/">{'Contributing'}</NavLink>
          <ul>
            <li>
              <NavLink to="/contributing/contributors/">
                <Lang lnkey='contributors.nav'/>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contributing/sponsors/">
                <Lang lnkey='sponsors.nav'/>
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/usage/">{'Usage & Examples'}</NavLink>
          <ul>
            <li>
              <NavLink to="/usage/autowiring/">{'Autowiring'}</NavLink>
            </li>
            <li>
              <NavLink to="/usage/results/">{'Results'}</NavLink>
            </li>
            <li>
              <NavLink to="/usage/logging/">{'Logging'}</NavLink>
            </li>
            <li>
              <NavLink to="/usage/middlewares/">{'Middlewares'}</NavLink>
            </li>
            <li>
              <NavLink to="/usage/storage/">{'Storage'}</NavLink>
            </li>
            <li>
              <NavLink to="/usage/route/">{'Route'}</NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</>;
export default Navbar;
