import React from 'react';
import Lang from '../../components/lang.tsx';
import Layout from '../../components/layout.tsx';
import ExternalLink from '../../components/external-link.tsx';
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
  <div className='card'>
    <h2>
      <Lang lnkey={'home.libraries.title'}/>
    </h2>
    <div>
      <p>
        <Lang lnkey={'home.libraries.description'}/>
      </p>
      <ul>
        <li>
          <ExternalLink
            to='https://github.com/matteofigus/api-benchmark'
            label={'matteofigus/api-benchmark'}/>
        </li>
        <li>
          <ExternalLink
            to='https://github.com/bvanderlaan/api-bench-runner'
            label='bvanderlaan/api-bench-runner'
          />
        </li>
        <li>
          <ExternalLink
            to='https://github.com/jeffbski/bench-rest'
            label='jeffbski/bench-rest'
          />
        </li>
      </ul>
      <p>
        <Lang lnkey={'home.libraries.reusability'}/>
      </p>
      <p>
        <Lang lnkey={'home.libraries.threading'}/>
      </p>
    </div>
  </div>
</Layout>;
export default Index;
