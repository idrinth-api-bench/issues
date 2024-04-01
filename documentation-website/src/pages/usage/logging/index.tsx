import React from 'react';
import {
  Lang,
} from '../../../components/lang.tsx';
import Layout from '../../../components/layout.tsx';
import Code from '../../../components/code.tsx';

const Logging = () => <Layout
  page='logging'
  path='/usage/logging'
>
  <div className='title-card'>
    <h1><Lang lnkey={'logging.title'}/></h1>
    <p>
      <Lang lnkey={'logging.description'}/>
    </p>
  </div>
  <div className='card'>
    <h2><Lang lnkey={'logging.used.title'}/></h2>
    <p>
      <Lang lnkey='logging.used.description'/>
    </p>
  </div>
  <div className='card'>
    <h2><Lang lnkey={'logging.custom.title'}/></h2>
    <div>
      <p>
        <Lang lnkey={'logging.custom.description'}/>
      </p>
      <Code language='typescript'>
        {`interface Logger {
  trace(msg: string, data: Record<string, unknown>): void;
  trace(msg: string): void;
  debug(msg: string, data: Record<string, unknown>): void;
  debug(msg: string): void;
  info(msg: string, data: Record<string, unknown>): void;
  info(msg: string): void;
  warn(msg: string, data: Record<string, unknown>): void;
  warn(msg: string): void;
  error(msg: string, data: Record<string, unknown>): void;
  error(msg: string): void;
  fatal(msg: string, data: Record<string, unknown>): void;
  fatal(msg: string): void;
}`}
      </Code>
      <p>
        <Lang lnkey={'logging.custom.final'}/>
      </p>
    </div>
  </div>
</Layout>;

export default Logging;
