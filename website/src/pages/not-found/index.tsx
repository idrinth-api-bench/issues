import React from 'react';
import {
  Lang,
} from '../../components/lang.tsx';

const Index = () => <section>
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
