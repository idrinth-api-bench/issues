import React from 'react';

const Storage = () => <div className='content'>
  <h1>Storage</h1>
  <p>
        Storage classes store each finished set of the run. By default, nothing
        is stored, but a mysql storage is provided for those wanting it.
  </p>
  <h2>Custom Storage</h2>
  <p>
        To provide a custom storage, implement the interface below. The method
        will be called once per task.
  </p>
  <pre>
    <code>
      {`interface Storage
{
  store(data: FinishedSet, now: Date): void;
}`}
    </code>
  </pre>
</div>;
export default Storage;
