import React from 'react';
import CsvReport from '../../../assets/csv-result.jpg';
import ApiBenchReport from '../../../assets/html-result.jpg';
import CliReport from '../../../assets/cli-result.jpg';
import JsonReport from '../../../assets/json-result.jpg';
import Layout from '../../../components/layout.tsx';
import Code from '../../../components/code.tsx';
import {
  Lang,
} from '../../../components/lang.tsx';

const Results = () => <Layout
  page='results'
  path='/usage/results'
>
  <div className='title-card'>
    <h1><Lang lnkey={'results.title'}/></h1>
    <p>
      <Lang lnkey={'results.description'}/>
    </p>
  </div>
  <div className='card'>
    <h2>CSV</h2>
    <div>
      <p>
        <Lang lnkey={'results.csv.description'}/>
      </p>
      <img src={CsvReport} alt='csv-result' />
    </div>
  </div>
  <div className='card'>
    <h2>HTML</h2>
    <div>
      <p>
        <Lang lnkey={'results.html.description'}/>
      </p>
      <img src={ApiBenchReport} alt='api-bench-result' />
    </div>
  </div>
  <div className='card'>
    <h2>CLI</h2>
    <div>
      <p>
        <Lang lnkey={'results.cli.description'}/>
      </p>
      <img src={CliReport} alt='cli-report' />
    </div>
  </div>
  <div className='card'>
    <h2>JSON</h2>
    <div>
      <p>
        <Lang lnkey={'results.json.description'}/>
      </p>
      <img src={JsonReport} alt='json-report' />
    </div>
  </div>
  <div className='card'>
    <h2><Lang lnkey={'results.custom.title'}/></h2>
    <div>
      <p>
        <Lang lnkey={'results.custom.description'}/>
      </p>
      <Code language='typescript'>
        {`interface Reporter {
  (results: FinishedRun, rootDir: string): void;
}`}
      </Code>
    </div>
  </div>
</Layout>;
export default Results;
