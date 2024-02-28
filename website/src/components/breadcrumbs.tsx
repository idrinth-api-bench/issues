import React from 'react';
import {
  NavLink,
} from 'react-router-dom';
import {
  Lang,
} from './lang.tsx';
import {
  ONE,
} from '../constants.ts';
import PropTypes from 'prop-types'

const build = (
  index: number,
  parts: string[],
  nav: React.JSX.Element[],
) => {
  const name = parts[index] === '' ? 'home' : parts[index];
  if (index === parts.length - ONE) {
    nav.push(<li>
      <Lang lnkey={name + '.nav'}/>
    </li>,);
    return;
  }
  let url = '';
  for (let i = 1; i <= index; i ++) {
    url += '/' + parts[i];
  }
  url += '/';
  nav.push(<li>
    <NavLink to={url}>
      <Lang lnkey={name + '.nav'}/>
    </NavLink>
  </li>,);
};

const Breadcrumbs = ({
  path,
},) => {
  if (path === '*') {
    return '';
  }
  const parts: string[] = path.split('/',);
  const nav: React.JSX.Element[] = [];
  for (let index = 0; index < parts.length; index ++) {
    build(index, parts, nav,);
  }
  return <nav className={'breadcrumbs'}>
    <ul>
      { nav }
    </ul>
  </nav>;
};

Breadcrumbs.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Breadcrumbs;
