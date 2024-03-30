import React from 'react';
import {
  Lang,
} from '../../components/lang.tsx';
import Layout from '../../components/layout.tsx';
import SyntaxHighlighter from 'react-syntax-highlighter';

const Index = () => <Layout
  Outlet={
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
          <SyntaxHighlighter language='bash'>
            npx -p @idrinth/api-bench-cli iabmp
          </SyntaxHighlighter>
        </p>
      </div>
      <div className='card'>
        <h2>
          <Lang lnkey='quick-start.step3.title'/>
        </h2>
        <p>
          <Lang lnkey='quick-start.step3.description'/>
          <SyntaxHighlighter language='typescript'>
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
          </SyntaxHighlighter>
        </p>
      </div>
      <div className='card'>
        <h2>
          <Lang lnkey='quick-start.step4.title'/>
        </h2>
        <p>
          <Lang lnkey='quick-start.step4.description'/>
          <SyntaxHighlighter language='bash'>
            npm start
          </SyntaxHighlighter>
        </p>
      </div>
    </section>}
  page='quick-start'
  path='/quick-start'
/>;
export default Index;
