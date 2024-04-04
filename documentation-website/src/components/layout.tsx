import DefaultMeta from './default-meta.tsx';
import Header from './header.tsx';
import Footer from './footer.tsx';
import React from 'react';
import Breadcrumbs from './breadcrumbs.tsx';
import ScrollToHashElement from './hash-scroll.tsx';
import {
  createPortal,
} from 'react-dom';
import CookieConsent from './cookie-consent.tsx';

interface LayoutProps {
  children?: React.ReactNode|React.ReactNode[],
  page?: string,
  path?: string,
  canonical?: string,
}

const Layout = ({
  page = '',
  path = '',
  canonical = '',
  children,
}: LayoutProps,) => {
  const meta = page
    ? <DefaultMeta page={page} path={canonical || path}/>
    : '';
  return <>
    {meta}
    <Header window={window || {}}/>
    <Breadcrumbs path={path}/>
    <article>
      {children}
    </article>
    <Footer/>
    <ScrollToHashElement/>
    {createPortal(<CookieConsent />, document.body,)}
  </>;
};

export default Layout;
