import DefaultMeta from './default-meta.tsx';
import Navbar from './navbar.tsx';
import Footer from './footer.tsx';
import React from 'react';
import Breadcrumbs from './breadcrumbs.tsx';
import PropTypes from 'prop-types';

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
    <Breadcrumbs path={path}/>
    <article>
      {Outlet}
    </article>
    <Footer/>
  </>;
};

Layout.propTypes = {
  Outlet: PropTypes.element.isRequired,
  page: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  canonical: PropTypes.string.isRequired,
};

export default Layout;
