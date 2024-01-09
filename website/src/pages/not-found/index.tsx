import React from 'react';
import {
  Lang,
} from '../../components/lang.tsx';
import DefaultMeta from '../../components/default-meta.tsx';

const Index = () => <section>
  <DefaultMeta path='/404' page='404'/>
  <div className="title-card">
    <h1>
      <Lang lnkey="404.title"/>
    </h1>
    <p>
      <Lang lnkey="404.description"/>
    </p>
  </div>
</section>;
export default Index;
