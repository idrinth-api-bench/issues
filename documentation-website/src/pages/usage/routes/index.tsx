import React from 'react';
import Lang from '../../../components/lang.tsx';
import Layout from '../../../components/layout.tsx';
import Code from '../../../components/code.tsx';
import ContentUnit from '../../../components/content-unit.tsx';

const Route = () => <Layout
  page='routes'
  path='/usage/routes'
>
  <ContentUnit
    text={'routes.title'}
    level={'h1'}>routes.description</ContentUnit>
  <div className='card'>
    <h2><Lang lnkey='routes.example.title'/></h2>
    <div>
      <p>
        <Lang lnkey='routes.example.description'/>
      </p>
      <p>
        <Lang lnkey='routes.example.middleware'/>
      </p>
      <Code language='typescript'>{`import {
  Task,
} from '@idrinth-api-bench/api-bench';

export default (apiURL, apiPassword): Task => {
  main: {
    method: 'get',
    url: apiURL + '?' + apiPassword,
  },
  pre: ['^user-agent',],
  post: ['^status-2xx','^access-token',],
};
      `}</Code>
    </div>
  </div>
</Layout>;
export default Route;
