import React from 'react';
import {
  NavLink,
} from 'react-router-dom';
import Lang from './lang.tsx';
import {
  ONE,
} from '../constants.ts';
import './breadcrumbs.scss';

interface BreadcrumbsProps {
  path: string;
}

const build = (
  index: number,
  parts: string[],
  nav: React.JSX.Element[],
) => {
  const name = parts[index] === '' ? 'home' : parts[index];
  if (index === parts.length - ONE) {
    nav.push(<li key={name}>
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        <span><Lang lnkey={'nav.' + name}/></span>
      }
    </li>,);
    return;
  }
  let url = '';
  for (let i = 1; i <= index; i ++) {
    url += '/' + parts[i];
  }
  url += '/';
  nav.push(<li key={name}>
    <NavLink to={url}>
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        <Lang lnkey={'nav.' + name}/>
      }
    </NavLink>
  </li>,);
};

const Breadcrumbs = ({
  path,
}: BreadcrumbsProps,) => {
  if (path === '*') {
    return '';
  }
  const parts: string[] = path.split('/',);
  const nav: React.JSX.Element[] = [];
  for (let index = 0; index < parts.length; index ++) {
    build(index, parts, nav,);
  }
  return <nav aria-label='Breadcrumb' className={'breadcrumbs'}>
    <ul>
      { nav }
    </ul>
  </nav>;
};

export default Breadcrumbs;
