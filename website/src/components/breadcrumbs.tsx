import React from 'react';
import {
  NavLink,
} from 'react-router-dom';
import {
  Lang,
} from './lang.tsx';

const Breadcrumbs = ({
  path,
},) => {
  const parts: string[] = path.split('/',);
  const nav: React.JSX.Element[] = [];
  for (let index = 1; index < parts.length; index ++) {
    let url = '';
    for (let i = 1; i <= index; i ++) {
      url += '/' + parts[index];
    }
    nav.push(<li>
      <NavLink to={url}>
        <Lang lnkey={parts[index] + '.title'}/>
      </NavLink>
    </li>,);
  }
  return <nav className={'breadcrumbs'}>
    <ul>
      <li>
        <NavLink to={'/'}>
          <Lang lnkey={'home.title'}/>
        </NavLink>
      </li>
      { nav }
    </ul>
  </nav>;
};

export default Breadcrumbs;
