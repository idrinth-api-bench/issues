import React from 'react';
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const AutoWiring = () => (
  <>
    <div className="title-card">
      <h1>Autowiring Route Parameters</h1>
      <p>
        Parameters of contained functions will be filled with environment
        variable values of the respective name (aBc {"->"} A_BC).
        <br /> Types will be automatically applied if there is either a default
        value to get the type from or a comment like /* boolean */ parameter
        added in front of the parameter.
        <br /> Comment types will always win over default value types. If those
        two don't match, you might get weird results. Sadly, a few things can't
        be done:
      </p>
    </div>
    <div className="content">
      <ul>
        <li>
          Do not use constants for their default values, they can't be properly
          analyzed and will throw an Error.
        </li>
        <li>
          Do not use arrays or objects as default values, they can't be
          autowired.
        </li>
        <li>Destructuring is not supported</li>
        <li>Default value types NOT of the same type as the parameter</li>
      </ul>

      <SyntaxHighlighter language="javascript" style={docco}>
          
            {`module.exports = (apiRootUrl, apiEMail, apiPassword) => ({
  id: 'login',
  main: {
    method: 'post',
    body: {
      email: apiEMail,
      password: apiPassword,
    },
    autohandle: 'json',
    url: apiRootUrl + '/api/login',
  },
  pre: [
    '^user-agent',
    '^encoding'
  ],
  post: [
    '^status-2xx',
    '^access-token',
  ],
});
`}
      </SyntaxHighlighter>
    </div>
  </>
);
export default AutoWiring;
