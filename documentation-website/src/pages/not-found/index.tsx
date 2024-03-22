import React from 'react';
import {
  Lang,
} from '../../components/lang.tsx';
import Layout from '../../components/layout.tsx';

const Index = () => <Layout
  Outlet={
    <div className='title-card'>
      <h1>
        <Lang lnkey='404.title'/>
      </h1>
      <p>
        <Lang lnkey='404.description'/>
      </p>
    </div>}
  page='404'
  path='*'
  canonical='/404'
/>;
export default Index;
