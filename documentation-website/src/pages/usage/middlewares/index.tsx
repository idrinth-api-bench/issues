import React from 'react';
import Layout from '../../../components/layout.tsx';
import Code from '../../../components/code.tsx';
import {
  Lang,
} from '../../../components/lang.tsx';

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
  <div className='card'>
    <h2><Lang lnkey={'middlewares.provided.title'}/></h2>
    <ul>
      <li>
        <Lang lnkey={'middlewares.provided.encoding'}/>
      </li>
      <li>
        <Lang lnkey={'middlewares.provided.access'}/>
      </li>
      <li>
        <Lang lnkey={'middlewares.provided.csrf'}/>
      </li>
      <li>
        <Lang lnkey={'middlewares.provided.2xx'}/>
      </li>
      <li>
        <Lang lnkey={'middlewares.provided.403'}/>
      </li>
      <li>s
        <Lang lnkey={'middlewares.provided.404'}/>
      </li>
      <li>
        <Lang lnkey={'middlewares.provided.user-agent'}/>
      </li>
      <li>
        <Lang lnkey={'middlewares.provided.cookies'}/>
      </li>
      <li>
        <Lang lnkey={'middlewares.provided.json'}/>
      </li>
      <li>
        <Lang lnkey={'middlewares.provided.xml'}/>
      </li>
      <li>
        <Lang lnkey={'middlewares.provided.silent-server-validator'}/>
      </li>
    </ul>
  </div>
  <div className='card'>
    <h2><Lang lnkey={'middlewares.custom.title'}/></h2>
    <div>
      <p>
        <Lang lnkey={'middlewares.custom.description'}/>
      </p>
      <Code language='typescript'>
        {`interface Middleware {
  process(response: Result): void;
  prepare(request: Request): Request;
}`}
      </Code>
    </div>
  </div>
</Layout>;
export default Middlewares;
