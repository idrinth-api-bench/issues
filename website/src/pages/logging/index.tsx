import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import hljs from "react-syntax-highlighter/dist/esm/styles/hljs";
const docco = hljs.docco;

const Logging = () => <>
  <div className="title-card">
    <h1>Logging</h1>
    <p>
        Any logger that either implements the interface or has a wrapper is an
        option. Wrappers for pino and winston are available.
    </p>
  </div>
  <div className="content">
    <h2>Logging levels used</h2>
    <p>
        Most log entries are debug level, with the major steps being written to
        info. Trace is currently not used but may be used for detailed argument
        printing at some point.
    </p>
    <h2>Custom Logger</h2>
    <p>
        You can implement the logger interface below and provide any logger you
        want to next to the already provided ones.
    </p>
    <SyntaxHighlighter language="javascript" style={docco}>
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
    </SyntaxHighlighter>

    <p>
        For ease of use, a wrapper is provided as well, that only requires a log
        method to be implemented.
    </p>
  </div>
</>;
export default Logging;
