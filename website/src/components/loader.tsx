import React from 'react';
import Layout from './layout.tsx';
import {
  Lang,
} from './lang.tsx';

const Loader = ({
  lnkey,
},) => <Layout
  Outlet={<div id='loader'>
    <span></span>
    <strong><Lang lnkey={lnkey}/></strong>
  </div>}
/>;
export default Loader;
