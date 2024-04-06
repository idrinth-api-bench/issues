import React from 'react';
import Code from '../../components/code.tsx';
import Layout from '../../components/layout.tsx';
import pkg from '../../../../package.json' with {
  type: 'json'
};
import './contributing.css';
import Lang from '../../components/lang.tsx';
import ContentUnit from '../../components/content-unit.tsx';
import schema from '../../../../mindmap/schema.json' with {
  type: 'json',
};
import {
  INDENTATION_SPACES,
} from '../../constants.ts';
import project from '../../assets/api-bench-project.png';
import Youtube from '../../components/youtube.tsx';
import ListUnit from '../../components/list-unit.tsx';
import CodeUnit from '../../components/code-unit.tsx';

const Index = () => <Layout
  page='contributing'
  path='/contributing'
>
  <ContentUnit level={'h1'} text={'contributing.title'}>
    contributing.description
  </ContentUnit>
  <Youtube lnkey={'contributing.youtube'} level={'h2'}>y-4ZxUshe4U</Youtube>
  <ContentUnit level={'h2'} text={'contributing.structure.title'}>
    contributing.structure.description
  </ContentUnit>
  <ContentUnit level={'h2'} text={'contributing.issues.title'}>
    contributing.issues.description
  </ContentUnit>
  <ContentUnit level={'h2'} text={'contributing.code.title'}>
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
  <ListUnit level={'h3'} text={'contributing.code.workflow.title'}>
    contributing.code.workflow.list_item_1
    contributing.code.workflow.list_item_2
    contributing.code.workflow.list_item_3
    contributing.code.workflow.list_item_4
    contributing.code.workflow.list_item_5
    contributing.code.workflow.list_item_6
    contributing.code.workflow.list_item_7
    contributing.code.workflow.list_item_8
    contributing.code.workflow.list_item_9
    contributing.code.workflow.list_item_10
  </ListUnit>
  <div className='card'>
    <h3><Lang lnkey={'contributing.code.mindmap.title'}/></h3>
    <div>
      <p><Lang lnkey={'contributing.code.mindmap.introduction'}/></p>
      <Code language='typescript'>
        {JSON.stringify(schema, null, INDENTATION_SPACES,)}
      </Code>
      <p><Lang lnkey={'contributing.code.mindmap.nodes'}/></p>
    </div>
  </div>
  <Youtube
    lnkey={'contributing.code.mindmap.youtube'}
    level={'h4'}
  >lz3zCCLgxDQ</Youtube>
  <ContentUnit level={'h3'} text={'contributing.code.tests.title'}>
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
  <ListUnit text={'contributing.code.naming.title'} level={'h3'}>
    contributing.code.naming.list_item_1
    contributing.code.naming.list_item_2
    contributing.code.naming.list_item_3
    contributing.code.naming.list_item_4
  </ListUnit>
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
  <div className='card'>
    <h3><Lang lnkey={'contributing.code.translation.title'}/></h3>
    <div>
      <p>
        <Lang lnkey={'contributing.code.translation.setup'}/>
      </p>
      <Code language='bash'>{`
npm run language
      `}</Code>
      <p>
        <Lang lnkey={'contributing.code.translation.path'}/>
          <p>
          <Lang lnkey={'contributing.code.translation.example'}/>
          </p>
      </p>
      <Code language='bash'>{`
  /documentation-website/language/EXAMPLE.yml    
      `}</Code>
    </div>
  </div>
  <Youtube
    lnkey={'contributing.code.translation.youtube'}
    level={'h4'}
  >FEYIeMCrrbk</Youtube>
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
  <ListUnit
    text={'contributing.code.commits.header.type.title'}
    level={'h5'}
    prefix={'contributing.code.commits.header.type.description'}
  >
    contributing.code.commits.header.type.list_item_1
    contributing.code.commits.header.type.list_item_2
    contributing.code.commits.header.type.list_item_3
    contributing.code.commits.header.type.list_item_4
    contributing.code.commits.header.type.list_item_5
    contributing.code.commits.header.type.list_item_6
    contributing.code.commits.header.type.list_item_7
    contributing.code.commits.header.type.list_item_8
  </ListUnit>
  <ListUnit
    text={'contributing.code.commits.header.scope.title'}
    level={'h5'}
    prefix={'contributing.code.commits.header.scope.description'}
  >
    contributing.code.commits.header.scope.list_item_1
    contributing.code.commits.header.scope.list_item_2
    contributing.code.commits.header.scope.list_item_3
    contributing.code.commits.header.scope.list_item_4
    contributing.code.commits.header.scope.list_item_5
    contributing.code.commits.header.scope.list_item_6
  </ListUnit>
  <div className={'card'}>
    <h5>
      <Lang lnkey={'contributing.code.commits.header.summary.title'}/>
    </h5>
    <div>
      <p>
        <Lang lnkey={'contributing.code.commits.header.summary.description'}/>
      </p>
      <ul>
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
    level={'h4'}
    text={'contributing.code.commits.body.title'}
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
  <CodeUnit
    prefix={'contributing.code.commits.complete.description'}
    text={'contributing.code.commits.complete.title'}
    level={'h4'}
    language={'markdown'}>{`
fix(framework): resolve issue with string injection from env

Fix a bug where given a function route definition that has a string-typed
or untyped parameter, the value would never be injected from the environment.

Closes #294
  `}</CodeUnit>
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
      <ul>
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
    level={'h3'}
    text={'contributing.code.pull_requests.title'}
  >
    contributing.code.pull_requests.description
  </ContentUnit>
  <ContentUnit
    level={'h2'}
    text={'contributing.documentation.title'}
  >
    contributing.documentation.description
  </ContentUnit>
  <ContentUnit
    level={'h3'}
    text={'contributing.examples.title'}
  >
    contributing.examples.description
  </ContentUnit>
</Layout>;

export default Index;
