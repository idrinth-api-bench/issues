import DefaultMeta from './default-meta.tsx';
import Header from './header.tsx';
import Footer from './footer.tsx';
import React from 'react';
import Breadcrumbs from './breadcrumbs.tsx';
import ScrollToHashElement from './hash-scroll.tsx';

interface LayoutProps {
  Outlet: React.ReactNode,
  page?: string,
  path?: string,
  canonical?: string,
}

const Layout = ({
  Outlet,
  page = '',
  path = '',
  canonical = '',
}: LayoutProps,) => {
  const meta = page
    ? <DefaultMeta page={page} path={canonical || path}/>
    : '';
  return <>
    {meta}
    <Header window={window || {}}/>
    <Breadcrumbs path={path}/>
    <article>
      {Outlet}
    </article>
    <Footer/>
    <ScrollToHashElement/>
  </>;
};

export default Layout;
