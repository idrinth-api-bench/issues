import React from 'react';
import {
  Lang,
} from '../../components/lang.tsx';
import Layout from '../../components/layout.tsx';
import Code from '../../components/code.tsx';

const Index = () => <Layout
  page='quick-start'
  path='/quick-start'
>
  <section>
    <div className='title-card'>
      <h1>
        <Lang lnkey='quick-start.title'/>
      </h1>
      <p>
        <Lang lnkey='quick-start.description'/>
      </p>
    </div>
    <div className='card'>
      <h2>
        <Lang lnkey='quick-start.step1.title'/>
      </h2>
      <p>
        <Lang lnkey='quick-start.step1.description'/>
      </p>
    </div>
    <div className='card'>
      <h2>
        <Lang lnkey='quick-start.step2.title'/>
      </h2>
      <p>
        <Lang lnkey='quick-start.step2.description'/>
        <Code language='bash'>
          npx -p @idrinth/api-bench-cli iabmp
        </Code>
      </p>
    </div>
    <div className='card'>
      <h2>
        <Lang lnkey='quick-start.step3.title'/>
      </h2>
      <p>
        <Lang lnkey='quick-start.step3.description'/>
        <Code language='typescript'>
          {`export default () => ({
  id: 'example test case',
  main: {
    method: 'get',
    url: 'https://reqres.in/api/users',
  },
  pre: [
    '^user-agent',
  ],
  post: [
    '^status-2xx',
  ],
});
  `}
        </Code>
      </p>
    </div>
    <div className='card'>
      <h2>
        <Lang lnkey='quick-start.step4.title'/>
      </h2>
      <p>
        <Lang lnkey='quick-start.step4.description'/>
        <Code language='bash'>
          npm start
        </Code>
      </p>
    </div>
  </section>
</Layout>;
export default Index;
