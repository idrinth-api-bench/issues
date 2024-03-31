import React from 'react';
import Layout from '../../../components/layout.tsx';
import Code from '../../../components/code.tsx';
import {Lang} from "../../../components/lang.tsx";

const AutoWiring = () => <Layout
  page='autowiring'
  path='/usage/autowiring'
>
  <div className='title-card'>
    <h1><Lang lnkey={'autowiring.title'}/></h1>
    <p>
      <Lang lnkey={'autowiring.parameters'}/>
    </p>
    <p>
      <Lang lnkey={'autowiring.parameters'}/>
    </p>
    <p>
      <Lang lnkey={'autowiring.limitations'}/>
    </p>
  </div>
  <div className='card'>
    <h2><Lang lnkey={'autowiring.limitation.title'}/></h2>
    <ul>
      <li>
        <Lang lnkey={'autowiring.limitation.constants'}/>
      </li>
      <li>
        <Lang lnkey={'autowiring.limitation.objects'}/>
      </li>
      <li>
        <Lang lnkey={'autowiring.limitation.destructuring'}/>
      </li>
      <li>
        <Lang lnkey={'autowiring.limitation.mixed'}/>
      </li>
    </ul>
  </div>
  <div className='card'>
    <h2><Lang lnkey={'autowiring.example.title'}/></h2>
    <div>
      <p><Lang lnkey={'autowiring.example.description'}/></p>
      <Code language='javascript'>
      {`module.exports = (apiRootUrl, apiEMail, apiPassword) => ({
  id: 'login',
  main: {
    method: 'post',
    body: {
      email: apiEMail,
      password: apiPassword,
    },
    autohandle: 'json',
    url: apiRootUrl + '/api/login',
  },
  pre: [
    '^user-agent',
    '^encoding'
  ],
  post: [
    '^status-2xx',
    '^access-token',
  ],
});
  `}
      </Code>
    </div>
  </div>
</Layout>;
export default AutoWiring;
