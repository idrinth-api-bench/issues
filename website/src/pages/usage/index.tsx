import React from 'react';
import {
  Lang,
} from '../../components/lang.tsx';

const Usage = () => <>
  <section>
    <div className="title-card">
      <h1>Usage &amp; Examples</h1>
    </div>

    <div className="card">
      <h2>Binaries</h2>
      <ul>
        <li>
          <strong>iabr</strong> (or <strong>run-benchmark</strong>)
          runs the current working directory's project
            if the routes folder is properly setup
          <ul>
            <li>Argument 1: threads (default 1)</li>
            <li>Argument 2: repetitions (default 1)</li>
            <li>Argument 3: language code (default en)</li>
          </ul>
        </li>
        <li>
          <strong>iabmp</strong> (or <strong>make-benchmark-project</strong>)
          creates a new benchmarking project
            in a subdirectory of the current working directory
          <ul>
            <li>Argument 1: project name (default: benchmark)</li>
          </ul>
        </li>
        <li>
          <strong>iabgfoa</strong>
          (or <strong>generate-benchmark-from-open-api</strong>)
          generates test skeletons
            from an open-api-documentation for a project in the current working
            directory
          <ul>
            <li>Argument 1: path to the open-api-document</li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="card">
      <h2>Programmatically</h2>

      <p>
        <Lang lnkey= 'usage.programmatically.description' />
      </p>
    </div>
  </section>
</>;
export default Usage;
