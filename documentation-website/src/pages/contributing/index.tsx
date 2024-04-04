import React from 'react';
import Code from '../../components/code.tsx';
import Layout from '../../components/layout.tsx';
import pkg from '../../../../package.json' with {
  type: 'json'
};
import './contributing.css';
import {
  Lang,
} from '../../components/lang.tsx';
import ContentUnit from '../../components/content-unit.tsx';
import schema from '../../../../mindmap/schema.json' with {
  type: 'json',
};
import {
  INDENTATION_SPACES,
} from '../../constants.ts';
import project from '../../assets/api-bench-project.png';
import Youtube from '../../components/youtube.tsx';

const Index = () => <Layout
  page='contributing'
  path='/contributing'
>
  <section>
    <ContentUnit titleLevel={1} titleText={'contributing.title'}>
      contributing.description
    </ContentUnit>
    <Youtube lnkey={'contributing.youtube'} level={'h2'}>y-4ZxUshe4U</Youtube>
    <ContentUnit titleLevel={2} titleText={'contributing.structure.title'}>
      contributing.structure.description
    </ContentUnit>
    <ContentUnit titleLevel={2} titleText={'contributing.issues.title'}>
      contributing.issues.description
    </ContentUnit>
    <ContentUnit titleLevel={2} titleText={'contributing.code.title'}>
      contributing.code.style
      contributing.code.breaking
    </ContentUnit>
    <div className='card'>
      <h3><Lang lnkey={'contributing.code.picking.title'}/></h3>
      <div>
        <p><Lang lnkey={'contributing.code.picking.labels'}/></p>
        <p><Lang lnkey={'contributing.code.picking.project'}/></p>
        <img src={project} alt={'project'}/>
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
    <Youtube
      lnkey={'contributing.code.translation.youtube'}
      level={'h3'}
    >FEYIeMCrrbk</Youtube>
    <div className='card'>
      <h3><Lang lnkey={'contributing.code.mindmap.title'}/></h3>
      <div>
        <p><Lang lnkey={'contributing.code.mindmap.introduction'}/></p>
        <Code language='json'>
          {JSON.stringify(schema, null, INDENTATION_SPACES,)}
        </Code>
        <p><Lang lnkey={'contributing.code.mindmap.nodes'}/></p>
      </div>
    </div>
    <Youtube
      lnkey={'contributing.code.mindmap.youtube'}
      level={'h4'}
    >lz3zCCLgxDQ</Youtube>
    <ContentUnit titleLevel={3} titleText={'contributing.code.tests.title'}>
      contributing.code.tests.description
    </ContentUnit>
    <div className='card'>
      <h4><Lang lnkey={'contributing.code.tests.manual.title'}/></h4>
      <div>
        <p>
          <Lang lnkey={'contributing.code.tests.manual.description'}/>
        </p>
        <Code language='bash'>{`
git clone https://github.com/idrinth/api-bench
cd api-bench
npm run coai
    `}</Code>
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
      <h3><Lang lnkey={'contributing.code.requirements.title'}/></h3>
      <ul>
        <li>
          <Lang lnkey={'contributing.code.requirements.node'}/>
          {' ('}{pkg.engines.node}{')'}
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
        <Code language='bash'>{`
git clone https://github.com/idrinth/api-bench
cd api-bench
npm run setup
    `}</Code>
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
        <Code language='markdown'>{`
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
    `}</Code>
      </div>
    </div>
    <div className="card">
      <h4><Lang lnkey={'contributing.code.commits.header.title'}/></h4>
      <div>
        <p>
          <Lang lnkey={'contributing.code.commits.header.description'}/>
        </p>
        <p>
          <Lang lnkey={'contributing.code.commits.header.format'}/>
        </p>
        <Code language='markdown'>{`
<type>(<scope>): <short summary>

Example:
build(website): bump follow-redirects from 1.15.4 to 1.15.6
    `}</Code>
      </div>
    </div>
    <div className={'card'}>
      <h5><Lang lnkey={'contributing.code.commits.header.type.title'}/></h5>
      <div>
        <p>
          <Lang lnkey={'contributing.code.commits.header.type.description'}/>
        </p>
        <ul className="card-list">
          <li>
            <Lang
              lnkey={'contributing.code.commits.header.type.list_item_1'}
            />
          </li>
          <li>
            <Lang
              lnkey={'contributing.code.commits.header.type.list_item_2'}
            />
          </li>
          <li>
            <Lang
              lnkey={'contributing.code.commits.header.type.list_item_3'}
            />
          </li>
          <li>
            <Lang
              lnkey={'contributing.code.commits.header.type.list_item_4'}
            />
          </li>
          <li>
            <Lang
              lnkey={'contributing.code.commits.header.type.list_item_5'}
            />
          </li>
          <li>
            <Lang
              lnkey={'contributing.code.commits.header.type.list_item_6'}
            />
          </li>
          <li>
            <Lang
              lnkey={'contributing.code.commits.header.type.list_item_7'}
            />
          </li>
          <li>
            <Lang
              lnkey={'contributing.code.commits.header.type.list_item_8'}
            />
          </li>
        </ul>
      </div>
    </div>
    <div className={'card'}>
      <h5>
        <Lang lnkey={'contributing.code.commits.header.scope.title'}/>
      </h5>
      <div>
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
      </div>
    </div>
    <div className={'card'}>
      <h5>
        <Lang lnkey={'contributing.code.commits.header.summary.title'}/>
      </h5>
      <div>
        <p>
          <Lang lnkey={'contributing.code.commits.header.summary.description'}/>
        </p>
        <ul className="card-list">
          <li>
            <Lang
              lnkey={'contributing.code.commits.header.summary.list_item_1'}
            />
          </li>
          <li>
            <Lang
              lnkey={'contributing.code.commits.header.summary.list_item_2'}
            />
          </li>
          <li>
            <Lang
              lnkey={'contributing.code.commits.header.summary.list_item_3'}
            />
          </li>
        </ul>
        <Code language='markdown'>{`
// Bad:
Fixes bug.

// Good:
fix unit tests failing
    `}</Code>
      </div>
    </div>
    <ContentUnit
      titleLevel={4}
      titleText={'contributing.code.commits.body.title'}
    >
      contributing.code.commits.body.description
      contributing.code.commits.body.time
      contributing.code.commits.body.content
    </ContentUnit>
    <div className={'card'}>
      <h4>
        <Lang lnkey={'contributing.code.commits.footer.title'}/>
      </h4>
      <div>
        <p>
          <Lang lnkey={'contributing.code.commits.footer.description'}/>
        </p>
        <p>
          <Lang lnkey={'contributing.code.commits.footer.content'}/>
        </p>
        <p>
          <Lang lnkey={'contributing.code.commits.footer.breaking'}/>
        </p>
        <Code language='markdown'>{`
BREAKING CHANGE: users must now provide a valid JWT token to access
protected routes.

Closes #123
    `}</Code>
      </div>
    </div>
    <div className={'card'}>
      <h4>
        <Lang lnkey={'contributing.code.commits.complete.title'}/>
      </h4>
      <div>
        <p>
          <Lang lnkey={'contributing.code.commits.complete.description'}/>
        </p>
        <Code language='markdown'>{`
fix(framework): resolve issue with string injection from env

Fix a bug where given a function route definition that has a string-typed
or untyped parameter, the value would never be injected from the environment.

Closes #294
    `}</Code>
      </div>
    </div>
    <div className={'card'}>
      <h4>
        <Lang lnkey={'contributing.code.commits.reverts.title'}/>
      </h4>
      <div>
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
    <ContentUnit
      titleLevel={3}
      titleText={'contributing.code.pull_requests.title'}
    >
      contributing.code.pull_requests.description
    </ContentUnit>
    <ContentUnit
      titleLevel={2}
      titleText={'contributing.documentation.title'}
    >
      contributing.documentation.description
    </ContentUnit>
    <ContentUnit
      titleLevel={3}
      titleText={'contributing.examples.title'}
    >
      contributing.examples.description
    </ContentUnit>
  </section>
</Layout>;

export default Index;
