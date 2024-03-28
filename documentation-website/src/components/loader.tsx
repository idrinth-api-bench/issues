import React from 'react';
import Layout from './layout.tsx';
import {
  Lang,
} from './lang.tsx';
import languageKey from '../locales/language-key.ts';

interface LoaderProps {
  lnkey: languageKey;
}

const Loader = ({
  lnkey,
}: LoaderProps,) => <Layout
  Outlet={<div id='loader'>
    <span></span>
    <strong><Lang lnkey={lnkey}/></strong>
  </div>}
/>;

export default Loader;
