import React from 'react';
import Layout from '../../../components/layout.tsx';
import ContentUnit from '../../../components/content-unit.tsx';
import ListUnit from '../../../components/list-unit.tsx';
import CodeUnit from '../../../components/code-unit.tsx';

const AutoWiring = () => <Layout
  page='autowiring'
  path='/usage/autowiring'
>
  <ContentUnit text={'autowiring.title'} level={'h1'}>
    autowiring.parameters
    autowiring.conversion
    autowiring.limitations
  </ContentUnit>
  <ListUnit text={'autowiring.limitation.title'} level={'h2'}>
    autowiring.limitation.constants
    autowiring.limitation.objects
    autowiring.limitation.destructuring
    autowiring.limitation.mixed
  </ListUnit>
  <CodeUnit
    text={'autowiring.example.title'}
    level={'h2'}
    language={'typescript'}>
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
  `}</CodeUnit>
</Layout>;
export default AutoWiring;
