import React from 'react';
import {
  Lang,
} from '../../../components/lang.tsx';
import SyntaxHighlighter from "react-syntax-highlighter";

const Route = () => <>
  <section>
    <div className="title-card">
      <h1><Lang lnkey='route.title'/></h1>
      <p><Lang lnkey='route.description'/></p>
    </div>
    <div className="card">
      <h1><Lang lnkey='route.example.title'/></h1>
      <div>
        <p><Lang lnkey='route.example.description'/></p>
        <SyntaxHighlighter language='typescript'>{`import {
  Task,
} from '@idrinth/api-bench';

export default (apiURL, apiPassword): Task => {
  main: {
    method: 'get',
    url: apiURL + '?' + apiPassword
  }
};
      `}</SyntaxHighlighter>
      </div>
    </div>
  </section>
</>;
export default Route;
