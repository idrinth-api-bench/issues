import React from 'react';
import Layout from '../components/layout.tsx';

const Loader = () => <Layout
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
      left: 'calc(50% - 3.5em)',
      top: 'calc(50% - 0.5em)',
    }}>Loading</strong>
  </div>}
/>;
export default Loader;
