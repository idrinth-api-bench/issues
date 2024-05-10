import React from 'react';
import Layout from '../../components/layout.tsx';
import ContentUnit from '../../components/content-unit.tsx';
import Youtube from '../../components/youtube.tsx';

const Index = () => <Layout
  page='home'
>
  <ContentUnit text={'home.title'} level={'h1'}>
    home.what
    home.why
  </ContentUnit>
  <ContentUnit text={'home.benchmark.title'} level={'h2'}>
    home.benchmark.microservices
    home.benchmark.purpose
  </ContentUnit>
  <ContentUnit text={'home.load-test.title'} level={'h2'}>
    home.load-test.microservices
    home.load-test.purpose
  </ContentUnit>
  <ContentUnit text={'home.content-test.title'} level={'h2'}>
    home.content-test.microservices
    home.content-test.purpose
  </ContentUnit>
  <Youtube lnkey={'home.demo.youtube'} level={'h2'}>gdm7kI0aSmo</Youtube>
  <ContentUnit text={'home.libraries.title'} level={'h2'}>
    home.libraries.description
    home.libraries.reusability
    home.libraries.threading
  </ContentUnit>
</Layout>;
export default Index;
