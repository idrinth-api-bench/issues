import React from 'react';

import Readme from '../assets/readme-svgrepo-com.svg';

import {
  NavLink,
} from 'react-router-dom';

const Navbar = () => <>
  <header>
    <div>
      <img src={Readme} alt="readme" />
      <strong>@idrinth/api-bench</strong>
    </div>

    <nav>
      <ul>
        <li>
          <NavLink to="/">{'Home'}</NavLink>
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
      </ul>
    </nav>
  </header>
</>;
export default Navbar;
