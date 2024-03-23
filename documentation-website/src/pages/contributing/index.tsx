import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Layout from '../../components/layout.tsx';
import {
  engines,
  // eslint-disable-next-line indent
} from '../../../../package.json' with {
  type: 'json'
};
import './contributing.css';
import {
  Lang,
} from '../../components/lang.tsx';

const Index = () => <Layout
  Outlet={<section>
    <div className='title-card'>
      <h1>
        <Lang lnkey={'contributing.title'}/>
      </h1>
      <p>
        <Lang lnkey={'contributing.description'}/>
      </p>
    </div>
    <div className='card'>
      <h2><Lang lnkey={'contributing.structure.title'}/></h2>
      <p>
        <Lang lnkey={'contributing.structure.description'}/>
      </p>
    </div>
    <div className='card'>
      <h2><Lang lnkey={'contributing.issues.title'}/></h2>
      <p>
        <Lang lnkey={'contributing.issues.description'}/>
      </p>
    </div>
    <div className='card'>
      <h2><Lang lnkey={'contributing.code.title'}/></h2>
      <div>
        <p>
          <Lang lnkey={'contributing.code.style'}/>
        </p>
        <p>
          <Lang lnkey={'contributing.code.style'}/>
        </p>
      </div>
    </div>
    <div className='card'>
      <h3><Lang lnkey={'contributing.code.workflow.title'}/></h3>
      <ul>
        <li><Lang lnkey={'contributing.code.workflow.list_item_1'}/></li>
        <li><Lang lnkey={'contributing.code.workflow.list_item_2'}/></li>
        <li><Lang lnkey={'contributing.code.workflow.list_item_3'}/></li>
        <li><Lang lnkey={'contributing.code.workflow.list_item_4'}/></li>
        <li><Lang lnkey={'contributing.code.workflow.list_item_5'}/></li>
        <li><Lang lnkey={'contributing.code.workflow.list_item_6'}/></li>
        <li><Lang lnkey={'contributing.code.workflow.list_item_7'}/></li>
        <li><Lang lnkey={'contributing.code.workflow.list_item_8'}/></li>
        <li><Lang lnkey={'contributing.code.workflow.list_item_9'}/></li>
      </ul>
    </div>
    <div className='card'>
      <h3><Lang lnkey={'contributing.code.tests.title'}/></h3>
      <p>
        <Lang lnkey={'contributing.code.tests.description'}/>
      </p>
    </div>
    <div className='card'>
      <h4><Lang lnkey={'contributing.code.tests.manual.title'}/></h4>
      <div>
        <p>
          <Lang lnkey={'contributing.code.tests.manual.description'}/>
        </p>
        <SyntaxHighlighter language='bash'>{`
git clone https://github.com/idrinth/api-bench
cd api-bench
npm run coai
        `}</SyntaxHighlighter>
      </div>
    </div>
    <div className='card'>
      <h3><Lang lnkey={'contributing.code.naming.title'}/></h3>
      <ul>
        <li><Lang lnkey={'contributing.code.naming.list_item_1'}/></li>
        <li><Lang lnkey={'contributing.code.naming.list_item_2'}/></li>
        <li><Lang lnkey={'contributing.code.naming.list_item_3'}/></li>
        <li><Lang lnkey={'contributing.code.naming.list_item_4'}/></li>
      </ul>
    </div>
    <div className='card'>
      <h3><Lang lnkey={'contributing.code.naming.list_item_4'}/></h3>
      <ul>
        <li>
          <Lang lnkey={'contributing.code.requirements.node'}/>
          {engines.node}
        </li>
        <li>
          <Lang lnkey={'contributing.code.requirements.os'}/>
        </li>
      </ul>
    </div>
    <div className='card'>
      <h3><Lang lnkey={'contributing.code.setup.title'}/></h3>
      <div>
        <p>
          <Lang lnkey={'contributing.code.setup.description'}/>
        </p>
        <SyntaxHighlighter language='bash'>{`
  git clone https://github.com/idrinth/api-bench
  cd api-bench
  npm run setup
        `}</SyntaxHighlighter>
      </div>
    </div>
    <div className="card">
      <h3><Lang lnkey={'contributing.code.commits.title'}/></h3>
      <div>
        <p className="preface">
          <Lang lnkey={'contributing.code.commits.preface'}/>
        </p>
        <p>
          <Lang lnkey={'contributing.code.commits.introduction'}/>
        </p>
        <p>
          <Lang lnkey={'contributing.code.commits.parts'}/>
        </p>
        <SyntaxHighlighter language='markdown'>{`
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
        `}</SyntaxHighlighter>

        <h4><Lang lnkey={'contributing.code.commits.header.title'}/></h4>
        <p>
          <Lang lnkey={'contributing.code.commits.header.description'}/>
        </p>
        <p>
          <Lang lnkey={'contributing.code.commits.header.format'}/>
        </p>
        <SyntaxHighlighter language='markdown'>{`
<type>(<scope>): <short summary>

Example:
build(website): bump follow-redirects from 1.15.4 to 1.15.6
        `}</SyntaxHighlighter>
        <h5><Lang lnkey={'contributing.code.commits.header.type.title'}/></h5>
        <p>
          <Lang lnkey={'contributing.code.commits.header.type.description'}/>
        </p>
        <ul className="card-list">
          <li>
            <Lang lnkey={'contributing.code.commits.header.type.list_item_1'}/>
          </li>
          <li>
            <Lang lnkey={'contributing.code.commits.header.type.list_item_2'}/>
          </li>
          <li>
            <Lang lnkey={'contributing.code.commits.header.type.list_item_3'}/>
          </li>
          <li>
            <Lang lnkey={'contributing.code.commits.header.type.list_item_4'}/>
          </li>
          <li>
            <Lang lnkey={'contributing.code.commits.header.type.list_item_5'}/>
          </li>
          <li>
            <Lang lnkey={'contributing.code.commits.header.type.list_item_6'}/>
          </li>
          <li>
            <Lang lnkey={'contributing.code.commits.header.type.list_item_7'}/>
          </li>
          <li>
            <Lang lnkey={'contributing.code.commits.header.type.list_item_8'}/>
          </li>
        </ul>
        <h5>
          <Lang lnkey={'contributing.code.commits.header.scope.title'}/>
        </h5>
        <p>
          <Lang lnkey={'contributing.code.commits.header.scope.description'}/>
        </p>
        <ul className="card-list">
          <li>
            <Lang lnkey={'contributing.code.commits.header.scope.list_item_1'}/>
          </li>
          <li>
            <Lang lnkey={'contributing.code.commits.header.scope.list_item_2'}/>
          </li>
          <li>
            <Lang lnkey={'contributing.code.commits.header.scope.list_item_3'}/>
          </li>
          <li>
            <Lang lnkey={'contributing.code.commits.header.scope.list_item_4'}/>
          </li>
        </ul>
        <h5>
          <Lang lnkey={'contributing.code.commits.header.summary.list_item_4'}/>
        </h5>
        <p>
          <Lang lnkey={'contributing.code.commits.header.summary.list_item_4'}/>
        </p>
        <ul className="card-list">
          <li>
            <Lang
              lnkey={'contributing.code.commits.header.summary.list_item_4'}
            />
          </li>
          <li>
            <Lang
              lnkey={'contributing.code.commits.header.summary.list_item_4'}
            />
          </li>
          <li>
            <Lang
              lnkey={'contributing.code.commits.header.summary.list_item_4'}
            />
          </li>
        </ul>
        <SyntaxHighlighter language='markdown'>{`
// Bad:
Fixes bug.

// Good:
fix unit tests failing
        `}</SyntaxHighlighter>

        <h4>
          <Lang lnkey={'contributing.code.commits.body.title'}/>
        </h4>
        <p>
          <Lang lnkey={'contributing.code.commits.body.description'}/>
        </p>
        <p>
          <Lang lnkey={'contributing.code.commits.body.time'}/>
        </p>
        <p>
          <Lang lnkey={'contributing.code.commits.body.content'}/>
        </p>

        <h4>
          <Lang lnkey={'contributing.code.commits.footter.title'}/>
        </h4>
        <p>
          <Lang lnkey={'contributing.code.commits.footer.description'}/>
        </p>
        <p>
          <Lang lnkey={'contributing.code.commits.footer.content'}/>
        </p>
        <p>
          <Lang lnkey={'contributing.code.commits.footer.breaking'}/>
        </p>
        <SyntaxHighlighter language='markdown'>{`
BREAKING CHANGE: users must now provide a valid JWT token to access
protected routes.

Closes #123
        `}</SyntaxHighlighter>
        <h4>
          <Lang lnkey={'contributing.code.commits.complete.title'}/>
        </h4>
        <p>
          <Lang lnkey={'contributing.code.commits.complete.description'}/>
        </p>
        <SyntaxHighlighter language='markdown'>{`
fix(framework): resolve issue with string injection from env

Fix a bug where given a function route definition that has a string-typed
or untyped parameter, the value would never be injected from the environment.

Closes #294
        `}</SyntaxHighlighter>

        <h4>
          <Lang lnkey={'contributing.code.commits.reverts.title'}/>
        </h4>
        <p>
          <Lang lnkey={'contributing.code.commits.reverts.description'}/>
        </p>
        <p>
          <Lang lnkey={'contributing.code.commits.reverts.content'}/>
        </p>
        <ul className="card-list">
          <li>
            <Lang lnkey={'contributing.code.commits.reverts.list_item_1'}/>
          </li>
          <li>
            <Lang lnkey={'contributing.code.commits.reverts.list_item_2'}/>
          </li>
        </ul>
      </div>
    </div>
    <div className='card'>
      <h2>
        <Lang lnkey={'contributing.documentation.title'}/>
      </h2>
      <p>
        <Lang lnkey={'contributing.documentation.description'}/>
      </p>
    </div>
    <div className='card'>
      <h3>
        <Lang lnkey={'contributing.examples.title'}/>
      </h3>
      <p>
        <Lang lnkey={'contributing.examples.description'}/>
      </p>
    </div>
  </section>}
  page='contributing'
  path='/contributing'
/>;

export default Index;
