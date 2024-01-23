import React from 'react';
import {
  Lang,
} from './lang.tsx';
import {
  NavLink,
} from 'react-router-dom';

const Footer = () => <footer>
  <span>©2020-2024 Björn Büttner and contributors.</span>
  <ul>
    <li>
      <NavLink to="/license/">
        <Lang lnkey='license.nav'/>
      </NavLink>
    </li>
    <li>
      <NavLink to="/imprint/">
        <Lang lnkey='imprint.nav'/>
      </NavLink>
    </li>
    <li>
      <NavLink to="/support/">
        <Lang lnkey='support.nav'/>
      </NavLink>
    </li>
  </ul>
</footer>;

export default Footer;
