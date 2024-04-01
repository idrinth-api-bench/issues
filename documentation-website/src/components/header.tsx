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
import DarkModeButton from './dark-mode-button.tsx';
import SocialLink from './social-link.tsx';
import {
  MdArrowDropDown,
} from 'react-icons/md';

const Header = ({
  window,
}: {window: Window},) => <header>
  <div>
    <NavLink id="logo" to="/">
      <img src={IAB} alt="@idrinth/api-bench" />
    </NavLink>
    <strong>@idrinth/api-bench</strong>
    <em>v{pkg.version}</em>
  </div>
  <nav aria-label='Social Links Menu'>
    <ul className={'socials'}>
      <SocialLink
        to="https://www.npmjs.com/package/@idrinth/api-bench"
        label={'npm-main'}
        logo={'npm'}
      />
      <SocialLink
        to="https://github.com/Idrinth/api-bench"
        label={'github'}
      />
      <SocialLink
        to={'https://www.youtube.com/@idrinth-api-bench'}
        label={'youtube'}
      />
      <SocialLink
        to="https://www.linkedin.com/groups/9588634/"
        label={'linkedin'}
      />
      <SocialLink
        to="https://www.npmjs.com/package/@idrinth/api-bench-cli"
        label={'npm-cli'}
        logo={'npm'}
      />
      <SocialLink
        to={'https://medium.com/idrinth-api-bench'}
        label={'medium'}
      />
      <SocialLink
        to={
          'https://app.opensauced.pizza/workspaces' +
          '/b1f1f893-1572-4353-af0c-548ba47007e7'
        }
        label={'open-sauced'}
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
  <nav aria-label='Main Menu'>
    <ul>
      <li>
        <NavLink to="/quick-start/">
          <Lang lnkey='nav.quick-start'/>
        </NavLink>
      </li>
      <li>
        <NavLink
          aria-expanded="false"
          id="dropdown-contributing"
          aria-controls="contributing-menu"
          className="dropdown-links-heading"
          to="/contributing/">
          <Lang lnkey='nav.contributing'/>
          <MdArrowDropDown />
        </NavLink>
        <ul aria-labelledby="dropdown-contributing" id="contributing-menu" >
          <li>
            <NavLink to="/contributing/contributors/">
              <Lang lnkey='nav.contributors'/>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contributing/sponsors/">
              <Lang lnkey='nav.sponsors'/>
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink
          id="dropdown-usage-links"
          aria-controls='usages-menu'
          className="dropdown-links-heading"
          aria-expanded="false"
          to="/usage/">
          <Lang lnkey='nav.usage'/>
          <MdArrowDropDown />
        </NavLink>
        <ul id="usages-menu" aria-labelledby="dropdown-usage-links" >
          <li>
            <NavLink to="/usage/autowiring/">
              <Lang lnkey='nav.autowiring'/>
            </NavLink>
          </li>
          <li>
            <NavLink to="/usage/results/">
              <Lang lnkey='nav.results'/>
            </NavLink>
          </li>
          <li>
            <NavLink to="/usage/logging/">
              <Lang lnkey='nav.logging'/>
            </NavLink>
          </li>
          <li>
            <NavLink to="/usage/middlewares/">
              <Lang lnkey='nav.middlewares'/>
            </NavLink>
          </li>
          <li>
            <NavLink to="/usage/storage/">
              <Lang lnkey='nav.storage'/>
            </NavLink>
          </li>
          <li>
            <NavLink to="/usage/routes/">
              <Lang lnkey='nav.routes'/>
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink to="/faq/">
          <Lang lnkey='nav.faq'/>
        </NavLink>
      </li>
    </ul>
  </nav>
  <DarkModeButton window={window}/>
</header>;
export default Header;
