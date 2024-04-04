import React from 'react';
import Layout from '../../components/layout.tsx';
import ContentUnit from '../../components/content-unit.tsx';

const Index = () => <Layout
  page='404'
  path='*'
  canonical='/404'
>
  <ContentUnit text={'404.title'} level={'h1'}>404.description</ContentUnit>
</Layout>;
export default Index;
