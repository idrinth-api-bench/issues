import React from 'react';
import Layout from '../../components/layout.tsx';
import ContentUnit from '../../components/content-unit.tsx';
import CodeUnit from '../../components/code-unit.tsx';

const Index = () => <Layout
  page='quick-start'
  path='/quick-start'
>
  <ContentUnit text={'quick-start.title'} level={'h1'}>
    quick-start.description
  </ContentUnit>
  <ContentUnit text={'quick-start.step1.title'} level={'h2'}>
    quick-start.step1.description
  </ContentUnit>
  <CodeUnit
    text={'quick-start.step2.title'}
    prefix={'quick-start.step2.description'}
    postfix={'quick-start.step2.result'}
    level={'h2'}
    language={'bash'}>npx -p @idrinth/api-bench-cli iabmp</CodeUnit>
  <CodeUnit
    prefix={'quick-start.step3.description'}
    text={'quick-start.step3.title'}
    postfix={'quick-start.step3.result'}
    level={'h2'}
    language={'typescript'}>
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
  </CodeUnit>
  <CodeUnit
    text={'quick-start.step4.title'}
    level={'h2'}
    language={'bash'}
    prefix={'quick-start.step4.description'}>npm start</CodeUnit>
  <ContentUnit
    text={'quick-start.step5.title'}
    level={'h2'}>
    quick-start.step5.description
    quick-start.step5.result
  </ContentUnit>
</Layout>;
export default Index;
