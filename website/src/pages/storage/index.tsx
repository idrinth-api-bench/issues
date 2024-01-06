import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

const Storage = () => <>
  <section>
    <div className="title-card">
      <h1>Storage</h1>
      <p>
          Storage classes store each finished set of the run. By default, nothing
          is stored, but a mysql storage is provided for those wanting it.
      </p>
    </div>
    <div className="card">
      <h2>Custom Storage</h2>
      <div>
        <p>
            To provide a custom storage, implement the interface below. The method
            will be called once per task.
        </p>
        <SyntaxHighlighter language="javascript">
          {`interface Storage
  {
    store(data: FinishedSet, now: Date): void;
  }`}
        </SyntaxHighlighter>
      </div>
    </div>
  </section>
</>;
export default Storage;
