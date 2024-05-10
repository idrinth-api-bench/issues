import React from 'react';
import Layout from '../../../components/layout.tsx';
import CodeUnit from '../../../components/code-unit.tsx';
import ContentUnit from '../../../components/content-unit.tsx';

const Storage = () => <Layout
  page='storage'
  path='/usage/storage'
>
  <ContentUnit
    text={'storage.title'}
    level={'h1'}
  >storage.description</ContentUnit>
  <ContentUnit
    text={'storage.experimental.title'}
    level={'h2'}
  >storage.experimental.description</ContentUnit>
  <CodeUnit
    text={'storage.custom.title'}
    level={'h2'}
    language={'typescript'}
    prefix={'storage.custom.description'}
  >{`interface Storage
{
  store(data: FinishedSet, now: Date): void;
}`}</CodeUnit>
</Layout>;
export default Storage;
