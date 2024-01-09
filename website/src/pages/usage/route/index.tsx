import React from 'react';
import {
  Lang,
} from '../../../components/lang.tsx';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Layout from '../../../components/layout.tsx';

const Route = () => <Layout Outlet={<section>
  <div className='title-card'>
    <h1><Lang lnkey='route.title'/></h1>
    <p><Lang lnkey='route.description'/></p>
  </div>
  <div className='card'>
    <h2><Lang lnkey='route.example.title'/></h2>
    <div>
      <p><Lang lnkey='route.example.description'/></p>
      <SyntaxHighlighter language='typescript'>{`import {
Task,
} from '@idrinth/api-bench';

export default (apiURL, apiPassword): Task => {
main: {
  method: 'get',
  url: apiURL + '?' + apiPassword
}
};
    `}</SyntaxHighlighter>
    </div>
  </div>
</section>}
  page='autowiring'
  path='/usage/route'
/>;
export default Route;
