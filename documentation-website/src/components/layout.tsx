import React from 'react';
import Breadcrumbs from './breadcrumbs.tsx';
import DefaultMeta from './default-meta.tsx';
import Footer from './footer.tsx';
import ScrollToHashElement from './hash-scroll.tsx';
import Header from './header.tsx';
import Airtime from './airtime.tsx';

interface LayoutProps {
  children?: React.ReactNode | React.ReactNode[];
  page?: string;
  path?: string;
  canonical?: string;
}

const Layout = ({
  page = '',
  path = '',
  canonical = '',
  children,
}: LayoutProps,) => {
  const meta = page ?
    <DefaultMeta
      page={page}
      path={canonical || path}
    />
    :
    '';
  return (
    <>
      {meta}
      <Header window={window || {}} />
      <Breadcrumbs path={path} />
      <article>{children}</article>
      <Footer window={window || {}} />
      <Airtime/>
      <ScrollToHashElement />
    </>
  );
};

export default Layout;
