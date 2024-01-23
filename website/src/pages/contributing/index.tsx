import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Layout from '../../components/layout.tsx';

const Index = () => <Layout
  Outlet={<section>
    <div className='title-card'>
      <h1>
        Contributing
      </h1>
      <p>
        Any and all contributions are encouraged.
      </p>
    </div>
    <div className='card'>
      <h2>Issues</h2>
      <p>
        Any idea and bug report is considered a contribution.
        Not only do they help improving the code base,
        they help other people to get more use out of this framework.
        Please try to stick to the format of predefined issue types
        to make it easier to filter and handle for anyone interested in the
        topic.
      </p>
    </div>
    <div className='card'>
      <h2>Code</h2>
      <div>
        <p>
          The style guidelines are provided via eslint.
          Please try to optimise code for readability,
          since code will be read way more often than it will be changed.
        </p>
        <p>
          While adding functionality, keep in mind to break existing
          interfaces, entry points and functionality only if absolutely
          necessary.
        </p>
      </div>
    </div>
    <div className='card'>
      <h3>Tests</h3>
      <p>
        Testing new code is expected and adding tests or
        improving tests for old code is appreciated.
        The goal is to find most issues by either
        static analysis or unit and integration tests.
      </p>
    </div>
    <div className='card'>
      <h4>Manual Tests</h4>
      <div>
        <p>
          For manual testing you can run <strong>npm run coai</strong>{' '}
          in the source folder to automatically check out and install
          all required files for testing.
        </p>
        <SyntaxHighlighter language='bash'>{`
git clone https://github.com/idrinth/api-bench
cd api-bench
npm run coai
        `}</SyntaxHighlighter>
      </div>
    </div>
    <div className='card'>
      <h3>Naming conventions</h3>
      <ul>
        <li>camelCase for variables and functions</li>
        <li>UPPER_SNAKE_CASE for constants</li>
        <li>PascalCase for interfaces and classes</li>
        <li>kebab-case for file names</li>
      </ul>
    </div>
    <div className='card'>
      <h3>Requirements</h3>
      <ul>
        <li>
          One of the last two node versions
        </li>
        <li>
          OS: Linux / Windows <i>(Other OS were not tested)</i>
        </li>
      </ul>
    </div>
    <div className='card'>
      <h3>Setup</h3>
      <div>
        <p>
          Run the following commands to create the full project:
        </p>
        <SyntaxHighlighter language='bash'>{`
  git clone https://github.com/idrinth/api-bench
  cd api-bench
  npm install
  cd website
  npm install
  cd ../framework
  npm install
        `}</SyntaxHighlighter>
      </div>
    </div>
    <div className='card'>
      <h2>Documentation</h2>
      <p>
        Documentation is an underrated part of every software.
        Adding any kind of clarification, example or improvement is highly
        appreciated and encouraged. The ones writing the documentation are
        the unsung heroes of open and closed source software.
      </p>
    </div>
    <div className='card'>
      <h3>Examples</h3>
      <p>
        For examples please keep in mind, that we don't want to overload any
        api. Don't use high load tasks, don't use apis that are not for public
        use. It is expected that examples will be run and they must not damage
        anyone, including third parties.
      </p>
    </div>
  </section>}
  page='contributing'
  path='/contributing'
/>;
export default Index;
