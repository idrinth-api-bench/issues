import React from 'react';
import {
  NavLink,
} from 'react-router-dom';

const Footer = () => <footer>
  <span>©2020-2024 Björn Büttner and contributors.</span>
  <ul>
    <li>
      <NavLink to="/license/">License</NavLink>
    </li>
    <li>
      <NavLink to="/imprint/">Imprint</NavLink>
    </li>
    <li>
      <NavLink to="/support/">Support</NavLink>
    </li>
  </ul>
</footer>;

export default Footer;
