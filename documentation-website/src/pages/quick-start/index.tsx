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
    level={'h2'}
    language={'bash'}>npx -p @idrinth/api-bench-cli iabmp</CodeUnit>
  <CodeUnit
    prefix={'quick-start.step3.description'}
    text={'quick-start.step3.title'}
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
</Layout>;
export default Index;
