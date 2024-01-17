import React from 'react';
import {
  Lang,
} from './lang.tsx';

const Footer = () => <footer>
  <span>©2020-2024 Björn Büttner and contributors.</span>
  <ul>
    <li>
      <a href="/license/">
        <Lang lnkey='license.nav'/>
      </a>
    </li>
    <li>
      <a href="/imprint/">
        <Lang lnkey='imprint.nav'/>
      </a>
    </li>
    <li>
      <a href="/support/">
        <Lang lnkey='support.nav'/>
      </a>
    </li>
  </ul>
</footer>;

export default Footer;
