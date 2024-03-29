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

const Header = ({
  window,
}: {window: Window},) => <header>
  <div>
    <img src={IAB} alt="@idrinth/api-bench" />
    <strong>@idrinth/api-bench</strong>
    <em>v{pkg.version}</em>
  </div>
  <nav>
    <ul>
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
      <SocialLink
        to={'https://www.youtube.com/channel/UCv0TBTkJdFQrdYLH8eR4-YQ'}
        label={'youtube'}
      />
    </ul>
  </nav>
  <nav>
    <ul>
      <li>
        <NavLink to="/"><Lang lnkey='nav.home'/></NavLink>
      </li>
      <li>
        <NavLink to="/quick-start/">
          <Lang lnkey='nav.quick-start'/>
        </NavLink>
      </li>
      <li>
        <NavLink to="/contributing/">
          <Lang lnkey='nav.contributing'/>
        </NavLink>
        <ul>
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
        <NavLink to="/usage/">
          <Lang lnkey='nav.usage'/>
        </NavLink>
        <ul>
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
