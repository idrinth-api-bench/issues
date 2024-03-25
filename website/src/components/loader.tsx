import React from 'react';
import Layout from './layout.tsx';
import {
  Lang,
} from './lang.tsx';

interface LoaderProps {
  lnkey: string;
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
