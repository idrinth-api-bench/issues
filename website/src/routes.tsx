import React, {
  lazy,
  Suspense,
} from 'react';
import Loader from './pagelike/loader.tsx';
import {
  FIRST,
  SECOND,
} from './constants.ts';

const make = (path: string, pathOverride?: string,) => {
  const LazyElement = path.includes('/',)
    ? lazy(() => import(
      `./pages/${ path.split('/',)[FIRST] }/`
      + `${ path.split('/',)[SECOND] }/index.tsx`
      ,),)
    : lazy(() => import(`./pages/${ path }/index.tsx`,),);
  return {
    path: pathOverride || '/' + path,
    exact: true,
    element: <Suspense fallback={<Loader/>}><LazyElement/></Suspense>,
  };
};

export default [
  make('home', '/',),
  make('contributing',),
  make('usage',),
  make('usage/autowiring',),
  make('usage/results',),
  make('usage/route',),
  make('usage/logging',),
  make('usage/middlewares',),
  make('usage/storage',),
  make('imprint',),
  make('license',),
  make('not-found', '*',),
];
