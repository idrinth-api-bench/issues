import React, {
  lazy, ReactElement,
  Suspense,
} from 'react';
import Loader from './pagelike/loader.tsx';
import {
  FIRST,
  SECOND,
  THIRD,
} from './constants.ts';
import routes from './routes.json' with {
  type: 'json',
};

interface Route {
  path: string,
  exact: true,
  element: ReactElement
}

const make = (path: string, pathOverride?: string,): Route => {
  const parts = path.split('/');
  const LazyElement = (() => {
    switch(parts.length) {
      case 1:
        return lazy(() => import(
            `./pages/${ parts[FIRST] }/index.tsx`
          ,),);
      case 2:
        return lazy(() => import(
            `./pages/${ parts[FIRST] }/`
            + `${ parts[SECOND] }/index.tsx`
          ,),);
      case 3:
        return lazy(() => import(
            `./pages/${ parts[FIRST] }/`
            + `${ parts[SECOND] }/`
            + `${ parts[THIRD] }/index.tsx`
          ,),);
      default:
        throw Error(`Too many path elements!`,);
    }
  })();
  return {
    path: pathOverride || '/' + path,
    exact: true,
    element: <Suspense fallback={<Loader/>}><LazyElement/></Suspense>,
  };
};

const data: Route[] = [];
for (const route of routes) {
  data.push(make(route.path, route.override),);
}

export default data;
