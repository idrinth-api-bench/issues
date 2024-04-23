import React from 'react';
import Lang from './lang.tsx';
import {
  NavLink,
} from 'react-router-dom';
import CookieConsent from './cookie-consent.tsx';
import LanguageSwitch from './language-switch.tsx';

const Footer = () => <footer>
  <span>©2020-2024 Björn Büttner and contributors.</span>
  <ul>
    <li>
      <LanguageSwitch />
    </li>
    <li>
      <CookieConsent />
    </li>
    <li>
      <NavLink to="/license/">
        <Lang lnkey='nav.license'/>
      </NavLink>
    </li>
    <li>
      <NavLink to="/imprint/">
        <Lang lnkey='nav.imprint'/>
      </NavLink>
    </li>
    <li>
      <NavLink to="/support/">
        <Lang lnkey='nav.support'/>
      </NavLink>
    </li>
    <li>
      <NavLink to="/code-of-conduct/">
        <Lang lnkey='nav.code-of-conduct'/>
      </NavLink>
    </li>
  </ul>
</footer>;

export default Footer;
