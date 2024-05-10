import React from 'react';
import Lang from '../../components/lang.tsx';
import Layout from '../../components/layout.tsx';
import MailLink from '../../components/mail-link.tsx';

const Index = () => <Layout
  page='support'
  path='/support'
>
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
      <MailLink to='service@bjoern-buettner.me'/>
    </p>
  </div>
  <div className='card'>
    <h2>
      <Lang lnkey='support.training.title'/>
    </h2>
    <p>
      <Lang lnkey='support.training.description'/>{' '}
      <MailLink to='service@bjoern-buettner.me'/>
    </p>
  </div>
</Layout>;
export default Index;
