import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Layout from '../../components/layout.tsx';
import './contributing.css';

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
      <h3>Contribution workflow</h3>
      <ul>
        <li>fork the repository</li>
        <li>create a feature branch (issue-xxx-does-something) from master</li>
        <li>create a draft pull request</li>
        <li>mention fixes #xxx in the description</li>
        <li>make your changes to the branch</li>
        <li>check if actions are all green</li>
        <li>mark as ready to review</li>
        <li>get changes reviewed</li>
        <li>
          if review is positive get changes merged otherwise fix and
          send back to review
        </li>
      </ul>
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
  npm run setup
        `}</SyntaxHighlighter>
      </div>
    </div>
    <div className="card">
      <h2>Commit Message Guidelines</h2>
      <div>
        <p className="preface">*This specification is inspired by Angular commit
          messages guidelines.
        </p>
        <p>These are the rules for how Git commit messages for api-bench should
          be formatted. This format leads to easier to read commit history.
        </p>
        <p>Each commit message consists of a <strong>header</strong>,
          a <strong>body</strong>, and a <strong>footer</strong>.
        </p>
        <code className="code-block">
          <p>&lt;header&gt;</p>
          <p>&#47;&#47; BLANK LINE</p>
          <p>&lt;body&gt;</p>
          <p>&#47;&#47; BLANK LINE</p>
          <p>&lt;footer&gt;</p>
        </code>
        <p>The <span className="mono-text">header</span> is mandatory and
          should conform to the Commit Message Header format.
        </p>
        <p>
          The <span className="mono-text">body</span> is mandatory for
          all commits except for those of type &quot;docs&quot; or in cases when
          it&apos;s clear from the header summary. They should conform to the
          Commit Message Body format.
        </p>
        <p>
          The <span className="mono-text">footer</span> is optional.
          The Commit Message Footer format describes what the footer is used
          for and the structure it must have.
        </p>

        <h3>Commit Message Header</h3>
        <p>Headers must adhere to the following format:</p>
        <code className="code-block">
          <p>&lt;type&gt;(&lt;scope&gt;): &lt;short summary&gt;</p>
          <br />
          <p>Example:</p>
          build(website): bump follow-redirects from 1.15.4 to 1.15.6
        </code>
        <h4>Type</h4>
        <p>The list of supported types:</p>
        <ul className="card-list">
          <li>
            <span className="mono-text">build</span>: Changes that affect
            the build system or external dependencies
          </li>
          <li>
            <span className="mono-text">ci</span>: Changes to CI configuration
            files and scripts
          </li>
          <li>
            <span className="mono-text">docs</span>: Documentation changes
          </li>
          <li>
            <span className="mono-text">feature</span>: A new feature
          </li>
          <li>
            <span className="mono-text">fix</span>: A bug fix
          </li>
          <li>
            <span className="mono-text">perf</span>: A code change that
            improves performance
          </li>
          <li>
            <span className="mono-text">refactor</span>: A code change
            that neither fixes a bug nor adds a feature
          </li>
          <li>
            <span className="mono-text">test</span>: Adding missing tests
            or correcting existing tests
          </li>
        </ul>
        <h4>Scope</h4>
        <p>The scope should be the name of the affected part of the project.
          The list of supported scopes:</p>
        <ul className="card-list">
          <li><span className="mono-text">framework</span></li>
          <li><span className="mono-text">website</span></li>
          <li><span className="mono-text">history-microservice</span></li>
          <li><span className="mono-text">history-website</span></li>
        </ul>
        <h4>Summary</h4>
        <p>The summary field should provide a succinct description of
          the change.</p>
        <ul className="card-list">
          <li>use the imperative, present tense</li>
          <li>don&apos;t capitalize the first letter</li>
          <li>no dot (.) at the end</li>
        </ul>
        <code className="code-block">
          <p>&#47;&#47; Bad:</p>
          <p>Fixes a bug.</p>
          <br />
          <p>&#47;&#47; Good:</p>
          <p>fix a bug</p>
        </code>

        <h3>Commit Message Body</h3>
        <p>Just as in the summary, use the imperative, present tense.</p>
        <p>The commit message body should explain why you are making
          the change. You can include a comparison of the previous behavior
          with the new behavior in order to illustrate the impact of the change.
        </p>

        <h3>Commit Message Footer</h3>
        <p>
          The footer can contain information about breaking changes and
          deprecations and is also the place to reference GitHub issues and
          other PRs that this commit closes or is related to.
        </p>
        <p>
          In case of
          breaking changes and deprecations the section should start with
          the phrase &quot;BREAKING CHANGE: &quot; or
          &quot;DEPRECATED: &quot; respectively followed by a description.
          For example:
        </p>
        <code className="code-block">
          <p>BREAKING CHANGE: users must now provide a valid JWT token to
            access protected routes.</p>
          <br />
          Closes #123
        </code>
        <p>Here&apos;s a complete example of a correct commit message:</p>
        <code className="code-block">
          <p>fix(framework): resolve issue with string injection from env</p>
          <br />
          <p>
            Fix a bug where given a function route definition that has a
            string-typed or untyped parameter, the value would never be
            injected from the environment.
          </p>
          <br />
          Closes #294
        </code>

        <h3>Revert commits</h3>
        <p>If the commit reverts a previous commit, it should begin with
          <span className="mono-text">revert: </span>, followed by the header
          of the reverted commit.
        </p>
        <p>The content of the commit message body should contain:</p>
        <ul className="card-list">
          <li>information about the SHA of the commit being reverted in
            the following format: <span className="mono-text">This
            reverts commit &lt;SHA&gt;</span>
          </li>
          <li>
            a clear description of the reason for reverting the commit message.
          </li>
        </ul>
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
        For examples please keep in mind, that we don&apos;t
        want to overload any api. Don&apos;t
        use high load tasks,
        don&apos;t
        use apis that are not for public use. It is expected that
        examples will be run and they must not damage
        anyone, including third parties.
      </p>
    </div>
  </section>}
  page='contributing'
  path='/contributing'
/>;

export default Index;
