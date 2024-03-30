import React from 'react';
import {
  Lang,
} from '../../components/lang.tsx';
import Layout from '../../components/layout.tsx';
import ExternalLink from '../../components/external-link.tsx';
import ContentUnit from '../../components/content-unit.tsx';

const Index = () => <Layout
  page='home'
>
  <ContentUnit titleText={'home.title'} titleLevel={1}>
    home.what
    home.why
  </ContentUnit>
  <ContentUnit titleText={'home.benchmark.title'} titleLevel={2}>
    home.benchmark.microservices
    home.benchmark.purpose
  </ContentUnit>
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
        <Lang lnkey={'home.libraries.threading'}/>
      </p>
    </div>
  </div>
</Layout>;
export default Index;
