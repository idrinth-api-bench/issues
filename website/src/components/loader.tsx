import React from 'react';
import Layout from './layout.tsx';
import {
  Lang,
} from './lang.tsx';
import PropTypes from 'prop-types';


const Loader = ({
  lnkey,
},) => <Layout
  Outlet={<div id='loader'>
    <span></span>
    <strong><Lang lnkey={lnkey}/></strong>
  </div>}
/>;

Loader.propTypes = {
  lnkey: PropTypes.string.isRequired,
};
export default Loader;
