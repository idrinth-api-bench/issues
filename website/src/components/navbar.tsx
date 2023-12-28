import React from 'react';

import {
  NavLink,
} from 'react-router-dom';

const Navbar = () => (
  <>
    <nav>
      <ul>
        <li>
          <NavLink to="/">{"home"}</NavLink>
        </li>
        <li>
          <NavLink to="/usage">{"usage & examples"}</NavLink>
          <ul>
            <li>
              <NavLink to="/usage/autowiring">{"autowiring"}</NavLink>
            </li>
            <li>
              <NavLink to="/usage/results">{"results"}</NavLink>
            </li>
            <li>
              <NavLink to="/usage/logging">{"logging"}</NavLink>
            </li>
            <li>
              <NavLink to="/usage/middlewares">{"middlewares"}</NavLink>
            </li>
            <li>
              <NavLink to="/usage/storage">{"storage"}</NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </>
);
export default Navbar;
