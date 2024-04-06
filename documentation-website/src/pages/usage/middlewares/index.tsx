import React from 'react';
import Layout from '../../../components/layout.tsx';
import Lang from '../../../components/lang.tsx';
import CodeUnit from '../../../components/code-unit.tsx';
import ListUnit from '../../../components/list-unit.tsx';

const Middlewares = () => <Layout
  page='middlewares'
  path='/usage/middlewares'
>
  <div className='title-card'>
    <h1><Lang lnkey={'middlewares.title'}/></h1>
    <p>
      <Lang lnkey={'middlewares.description'}/>
    </p>
    <ul>
      <li>{'^abc -> /path/to/this/library/src/middlewares/abc.js'}</li>
      <li>{'$@some/lib/abc -> @some/lib/src/middlewares/abc.js'}</li>
      <li>{'#abc -> /path/to/root/src/middlewares/abc.js'}</li>
    </ul>
  </div>
  <ListUnit text={'middlewares.provided.title'} level={'h2'}>
    middlewares.provided.encoding
    middlewares.provided.access
    middlewares.provided.csrf
    middlewares.provided.2xx
    middlewares.provided.403
    middlewares.provided.404
    middlewares.provided.user-agent
    middlewares.provided.cookies
    middlewares.provided.json
    middlewares.provided.xml
    middlewares.provided.silent-server-validator
    middlewares.provided.success-check
    middlewares.provided.failure-check
  </ListUnit>
  <CodeUnit
    text={'middlewares.custom.title'}
    language={'typescript'}
    prefix={'middlewares.custom.description'}
    level={'h2'}>{`interface Middleware {
    process(response: Result): void;
    prepare(request: Request): Request;
  }`}</CodeUnit>
</Layout>;
export default Middlewares;
