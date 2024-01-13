import React from 'react';
import {
  Lang,
} from '../../components/lang.tsx';
import Layout from '../../components/layout.tsx';

const Index = () => <Layout
  Outlet={
    <section>
      <div className='title-card'>
        <h1>
          <Lang lnkey='support.title'/>
        </h1>
        <p>
          <Lang lnkey='support.description'/>
        </p>
      </div>
      <div className='card'>
        <h2>
          <Lang lnkey='support.commercial.title'/>
        </h2>
        <p>
          <Lang lnkey='support.commercial.description'/>{' '}
          <a href='mailto:service@bjoern-buettner.me'>
            service@bjoern-buettner.me
          </a>
        </p>
      </div>
      <div className='card'>
        <h2>
          <Lang lnkey='support.training.title'/>
        </h2>
        <p>
          <Lang lnkey='support.training.description'/>{' '}
          <a href='mailto:service@bjoern-buettner.me'>
            service@bjoern-buettner.me
          </a>
        </p>
      </div>
    </section>}
  page='support'
  path='/support'
/>;
export default Index;
