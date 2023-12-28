import React from 'react';
import CsvReport from '../../../../readme/csv-result.jpg';
import ApiBenchReport from '../../../../readme/html-result.jpg';
import CliReport from '../../../../readme/cli-result.jpg';
import JsonReport from '../../../../readme/json-result.jpg';

const Result = () => <div>
  <h2>Results</h2>
  <p>
        By default, multiple all possible result formats are provided. The files
        are created in the application root, but that can be overwritten
        programmatically.
  </p>
  <h3>CSV</h3>
  <p>
        This provides a file, that can easily opened by excel or handled
        programmatically.
  </p>
  <img src={CsvReport} alt="csv-result" />
  <h3>HTML</h3>
  <p>
        This provides a simple html file, that could be sent by email for
        example.
  </p>
  <img src={ApiBenchReport} alt="api-bench-result" />
  <h2>CLI</h2>
  <p>
        This provides a small table in the command line, that shows most of the
        data.
  </p>
  <img src={CliReport} alt="cli-report" />
  <h2>JSON</h2>
  <p>
        This provides a file easily handled via other software. By default, it
        is not formatted for readability.
  </p>
  <img src={JsonReport} alt="json-report" />
  <h2>Custom Results</h2>
  <p>
        You can provide a custom reporter instance as part of your configuration
        in programmatically accessing the framework. It will be called with the
        complete result after all result modifiers have modified the result.
  </p>
  <pre>
    <code>
      {`interface Reporter {
  (results: FinishedRun, rootDir: string): void;
}`}
    </code>
  </pre>
</div>;
export default Result;
