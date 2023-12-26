import language from './helper/language.js';
import {
  parse,
} from 'yaml';
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
} from 'fs';
import {
  readJSONSync,
} from 'fs-extra';
import OpenApi from './open-api/open-api.js';
import assertTypeIsObject from './open-api/assert-type-is-object.js';
import {
  findName,
} from './open-api/find-name.js';
import {
  FIRST_ARGUMENT,
} from './constants.js';
import {
  toFilename,
} from './open-api/to-filename.js';

const write = (
  projectDir: string,
  name: string,
  method: string,
  uri: string,
  // eslint-disable-next-line max-params
) => {
  writeFileSync(
    projectDir + '/src/main/' + toFilename(name,) + '.ts',
    `import {
  Task,
} from '@idrinth/api-bench/src/task.js';

export default (/*String*/apiBaseUrl: string): Task => ({
  id: '${ name.replace(/[^a-z0-9_\-/ ]+/iug, '',) }',
  main: {
    method: '${ method }',
    url: apiBaseUrl + '${ uri }',
  },
  pre: [
    '^user-agent',
    '^encoding',
  ],
  post: [ '^status-2xx', ],
});
`,
  );
};

const buildFiles = (openApi: OpenApi, projectDir: string,) => {
  assertTypeIsObject(openApi.routes,);
  for (const uri of Object.keys(openApi.routes,)) {
    assertTypeIsObject(openApi.routes[uri],);
    for (const method of Object.keys(openApi.routes[uri],)) {
      assertTypeIsObject(openApi.routes[uri][method],);
      write(projectDir, findName(openApi, uri, method,), method, uri,);
    }
  }
};

export default (args: string[], projectDir: string,) => {
  const pathToDoc = args[FIRST_ARGUMENT];
  if (! pathToDoc) {
    throw new Error(language('no_openapi_document_given',),);
  }
  mkdirSync(projectDir + '/src/main', {
    recursive: true,
  },);
  if (pathToDoc.endsWith('.json',)) {
    buildFiles(readJSONSync(pathToDoc, 'utf8',), projectDir,);
    return;
  }
  if (pathToDoc.endsWith('.yml',)) {
    buildFiles(parse(readFileSync(pathToDoc, 'utf8',),), projectDir,);
    return;
  }
  if (pathToDoc.endsWith('.yaml',)) {
    buildFiles(parse(readFileSync(pathToDoc, 'utf8',),), projectDir,);
    return;
  }
  throw new Error(language('cant_determine_valid_type',),);
};
