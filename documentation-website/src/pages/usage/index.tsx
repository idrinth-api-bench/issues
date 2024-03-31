import React from 'react';
import {
  Lang,
} from '../../components/lang.tsx';
import Layout from '../../components/layout.tsx';
import Command from '../../components/command.tsx';

const Usage = () => <Layout
  page='usage'
  path='/usage'
>
  <div className='title-card'>
    <h1>
      <Lang lnkey={'usage.title'}/>
    </h1>
  </div>
  <div className='card'>
    <h2>
      <Lang lnkey={'usage.binaries.title'}/>
    </h2>
    <ul>
      <Command shortname={'iabr'} name={'run-benchmark'}>4</Command>
      <Command
        shortname={'iabmp'}
        name={'make-benchmark-project'}
        cli={true}
      >1</Command>
      <Command
        shortname={'iabgfoa'}
        name={'generate-benchmark-from-open-api'}
        cli={true}
      >1</Command>
      <Command
        shortname={'iabgfh'}
        name={'generate-benchmark-from-har'}
        cli={true}
      >1</Command>
      <Command
        shortname={'iabcrd'}
        name={'check-route-definitions'}
      >1</Command>
      <Command
        shortname={'iabrl'}
        name={'run-loadtest'}
      >5</Command>
    </ul>
  </div>
  <div className='card'>
    <h2>
      <Lang lnkey='usage.programmatically.title'/>
    </h2>
    <p>
      <Lang lnkey='usage.programmatically.description'/>
    </p>
  </div>
</Layout>;
export default Usage;
