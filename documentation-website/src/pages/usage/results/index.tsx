import React from 'react';
import CsvReport from '../../../assets/csv-result.jpg';
import ApiBenchReport from '../../../assets/html-result.jpg';
import CliReport from '../../../assets/cli-result.jpg';
import JsonReport from '../../../assets/json-result.jpg';
import Layout from '../../../components/layout.tsx';
import Lang from '../../../components/lang.tsx';
import CodeUnit from '../../../components/code-unit.tsx';
import ContentUnit from '../../../components/content-unit.tsx';

const Results = () => <Layout
  page='results'
  path='/usage/results'
>
  <ContentUnit
    text={'results.title'}
    level={'h1'}>results.description</ContentUnit>
  <div className='card'>
    <h2>CSV</h2>
    <div>
      <p>
        <Lang lnkey={'results.csv.description'}/>
      </p>
      <img src={CsvReport} alt='csv-result'/>
    </div>
  </div>
  <div className='card'>
    <h2>HTML</h2>
    <div>
      <p>
        <Lang lnkey={'results.html.description'}/>
      </p>
      <img src={ApiBenchReport} alt='api-bench-result'/>
    </div>
  </div>
  <div className='card'>
    <h2>CLI</h2>
    <div>
      <p>
        <Lang lnkey={'results.cli.description'}/>
      </p>
      <img src={CliReport} alt='cli-report'/>
    </div>
  </div>
  <div className='card'>
    <h2>JSON</h2>
    <div>
      <p>
        <Lang lnkey={'results.json.description'}/>
      </p>
      <img src={JsonReport} alt='json-report'/>
    </div>
  </div>
  <ContentUnit text={'results.xray.title'} level={'h2'}>
    results.xray.description
    results.xray.shared
    results.xray.cloud
    results.xray.onpremise
    results.xray.limitations
  </ContentUnit>
  <CodeUnit
    text={'results.custom.title'}
    level={'h2'}
    language={'typescript'}>{`interface Reporter {
  (results: FinishedRun, rootDir: string): void;
}`}</CodeUnit>
</Layout>;

export default Results;
