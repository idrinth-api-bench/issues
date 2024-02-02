import React from 'react';
import Layout from './layout.tsx';
import {
  Lang,
} from './lang.tsx';

const Loader = ({
  lnkey,
},) => <Layout
  Outlet={<div style={{
    position: 'fixed',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.1)',
  }}>
    <strong style={{
      position: 'absolute',
      textAlign: 'center',
      top: 'calc(50% - 0.5em)',
      width: '100%',
    }}><Lang lnkey={lnkey}/></strong>
  </div>}
/>;
export default Loader;
