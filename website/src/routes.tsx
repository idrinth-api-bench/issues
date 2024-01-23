import React, {
  lazy,
  ReactElement,
  Suspense,
} from 'react';
import Loader from './pagelike/loader.tsx';
import {
  FIRST,
  SECOND,
  SINGLE_ELEMENT,
  TWO_ELEMENTS,
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
  const parts = path.split('/',);
  const LazyElement = (() => {
    switch (parts.length) {
      case SINGLE_ELEMENT:
        return lazy(() => import(
          `./pages/${ parts[FIRST] }/index.tsx`
          ,),);
      case TWO_ELEMENTS:
        return lazy(() => import(
          `./pages/${ parts[FIRST] }/`
            + `${ parts[SECOND] }/index.tsx`
          ,),);
      default:
        throw Error('Too many path elements!',);
    }
  })();
  return {
    path: pathOverride || '/' + path + '/',
    exact: true,
    element: <Suspense fallback={<Loader/>}><LazyElement/></Suspense>,
  };
};

const data: Route[] = [];
for (const route of routes) {
  data.push(make(route.path, route.override,),);
}

export default data;
