import DefaultMeta from './default-meta.tsx';
import Navbar from './navbar.tsx';
import Footer from './footer.tsx';
import React from 'react';

const Layout = ({
  Outlet,
  page = '',
  path = '',
  canonical = '',
},) => {
  const meta = page
    ? <DefaultMeta page={page} path={canonical ? canonical : path}/>
    : '';
  return <>
    {meta}
    <Navbar/>
    <article>
      {Outlet}
    </article>
    <Footer/>
  </>;
};

export default Layout;
