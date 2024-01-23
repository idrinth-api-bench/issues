import React, {
  lazy,
  Suspense,
  ElementType,
} from 'react';
export default (Loader: ElementType) => [
  (() => {
    const LazyElement = lazy(() => import(
      './pages/contributing/index.tsx',
    ),);
    return {
      path: '/contributing/',
      exact: true,
      element: <Suspense fallback={<Loader/>}><LazyElement/></Suspense>,
    };
    })(),(() => {
    const LazyElement = lazy(() => import(
      `./pages/home/index.tsx`,
    ),);
    return {
      path: '/',
      exact: true,
      element: <Suspense fallback={<Loader/>}><LazyElement/></Suspense>,
    };
    })(),
  (() => {
    const LazyElement = lazy(() => import(
      './pages/imprint/index.tsx',
    ),);
    return {
      path: '/imprint/',
      exact: true,
      element: <Suspense fallback={<Loader/>}><LazyElement/></Suspense>,
    };
    })(),
  (() => {
    const LazyElement = lazy(() => import(
      './pages/license/index.tsx',
    ),);
    return {
      path: '/license/',
      exact: true,
      element: <Suspense fallback={<Loader/>}><LazyElement/></Suspense>,
    };
    })(),(() => {
    const LazyElement = lazy(() => import(
      `./pages/not-found/index.tsx`,
    ),);
    return {
      path: '*',
      exact: true,
      element: <Suspense fallback={<Loader/>}><LazyElement/></Suspense>,
    };
    })(),
  (() => {
    const LazyElement = lazy(() => import(
      './pages/support/index.tsx',
    ),);
    return {
      path: '/support/',
      exact: true,
      element: <Suspense fallback={<Loader/>}><LazyElement/></Suspense>,
    };
    })(),
  (() => {
    const LazyElement = lazy(() => import(
      './pages/usage/index.tsx',
    ),);
    return {
      path: '/usage/',
      exact: true,
      element: <Suspense fallback={<Loader/>}><LazyElement/></Suspense>,
    };
    })(),
  (() => {
    const LazyElement = lazy(() => import(
      './pages/contributing/contributors/index.tsx',
    ),);
    return {
      path: '/contributing/contributors/',
      exact: true,
      element: <Suspense fallback={<Loader/>}><LazyElement/></Suspense>,
    };
    })(),
  (() => {
    const LazyElement = lazy(() => import(
      './pages/contributing/sponsors/index.tsx',
    ),);
    return {
      path: '/contributing/sponsors/',
      exact: true,
      element: <Suspense fallback={<Loader/>}><LazyElement/></Suspense>,
    };
    })(),
  (() => {
    const LazyElement = lazy(() => import(
      './pages/usage/autowiring/index.tsx',
    ),);
    return {
      path: '/usage/autowiring/',
      exact: true,
      element: <Suspense fallback={<Loader/>}><LazyElement/></Suspense>,
    };
    })(),
  (() => {
    const LazyElement = lazy(() => import(
      './pages/usage/logging/index.tsx',
    ),);
    return {
      path: '/usage/logging/',
      exact: true,
      element: <Suspense fallback={<Loader/>}><LazyElement/></Suspense>,
    };
    })(),
  (() => {
    const LazyElement = lazy(() => import(
      './pages/usage/middlewares/index.tsx',
    ),);
    return {
      path: '/usage/middlewares/',
      exact: true,
      element: <Suspense fallback={<Loader/>}><LazyElement/></Suspense>,
    };
    })(),
  (() => {
    const LazyElement = lazy(() => import(
      './pages/usage/results/index.tsx',
    ),);
    return {
      path: '/usage/results/',
      exact: true,
      element: <Suspense fallback={<Loader/>}><LazyElement/></Suspense>,
    };
    })(),
  (() => {
    const LazyElement = lazy(() => import(
      './pages/usage/route/index.tsx',
    ),);
    return {
      path: '/usage/route/',
      exact: true,
      element: <Suspense fallback={<Loader/>}><LazyElement/></Suspense>,
    };
    })(),
  (() => {
    const LazyElement = lazy(() => import(
      './pages/usage/storage/index.tsx',
    ),);
    return {
      path: '/usage/storage/',
      exact: true,
      element: <Suspense fallback={<Loader/>}><LazyElement/></Suspense>,
    };
    })(),
];