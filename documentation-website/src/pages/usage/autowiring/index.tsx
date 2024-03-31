import React from 'react';
import Layout from '../../../components/layout.tsx';
import Code from '../../../components/code.tsx';

const AutoWiring = () => <Layout
  page='autowiring'
  path='/usage/autowiring'
>
  <div className='title-card'>
    <h1>Autowiring Route Parameters</h1>
    <p>
        Parameters of contained functions will be filled with environment
        variable values of the respective name (aBc {'->'} A_BC).
      <br /> Types will be automatically applied if there is either a default
        value to get the type from or a comment like /* boolean */ parameter
        added in front of the parameter.
      <br /> Comment types will always win over default value types. If those
        two don&apos;t
        match, you might get weird results. Sadly, a few things
        can&apos;t
        be done.
    </p>
  </div>
  <div className='card'>
    <h2>Limitations</h2>
    <ul>
      <li>
          Do not use constants for their default values, they can&apos;t
          be properly analyzed and will throw an Error.
      </li>
      <li>
          Do not use arrays or objects as default values, they can&apos;t
          be autowired.
      </li>
      <li>Destructuring is not supported</li>
      <li>Default value types NOT of the same type as the parameter</li>
    </ul>
  </div>
  <div className='card'>
    <h2>Example</h2>
    <Code language='javascript'>
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
    </Code>
  </div>
</Layout>;
export default AutoWiring;
