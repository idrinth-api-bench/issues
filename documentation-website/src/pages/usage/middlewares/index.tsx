import React from 'react';
import Layout from '../../../components/layout.tsx';
import Code from '../../../components/code.tsx';

const Middlewares = () => <Layout
  page='middlewares'
  path='/usage/middlewares'
>
  <div className='title-card'>
    <h1>Middlewares</h1>
    <p>
      Middlewares use an absolute file path to be loaded. The following
      characters will be used to expand short forms:
    </p>
    <ul>
      <li>{'^abc -> /path/to/this/library/src/middlewares/abc.js'}</li>
      <li>{'$@some/lib/abc -> @some/lib/src/middlewares/abc.js'}</li>
      <li>{'#abc -> /path/to/root/src/middlewares/abc.js'}</li>
    </ul>
  </div>
  <div className='card'>
    <h2>Provided Middlewares</h2>
    <ul>
      <li>json and form encode</li>
      <li>access token handling</li>
      <li>csrf-header handling</li>
      <li>status 2xx check</li>
      <li>status 403 check</li>
      <li>status 404 check</li>
      <li>user-agent</li>
      <li>cookies</li>
      <li>json-validator</li>
      <li>xml-validator</li>
      <li>silent-server-validator</li>
    </ul>
  </div>
  <div className='card'>
    <h2>Custom Middleware</h2>
    <div>
      <p>
        For custom middleware, implement the following interface. Prepare is
        called before sending a request, process after a request. If an error
        is thrown in process, any further validations are skipped.
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
