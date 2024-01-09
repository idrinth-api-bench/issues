import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  Lang,
} from '../../../components/lang.tsx';

const Storage = () => <section>
  <div className="title-card">
    <h1>Storage</h1>
    <p>
      <Lang lnkey='storage.description'/>
    </p>
  </div>
  <div className="card">
    <h2>Custom Storage</h2>
    <div>
      <p>
        <Lang lnkey='storage.custom.description'/>
      </p>
      <SyntaxHighlighter language="typescript">
        {`interface Storage
{
store(data: FinishedSet, now: Date): void;
}`}
      </SyntaxHighlighter>
    </div>
  </div>
</section>;
export default Storage;
