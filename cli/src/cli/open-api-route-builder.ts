import language from '../helper/language.js';
import {
  parse,
} from 'yaml';
import {
  readFileSync,
  createWriteStream,
  mkdirSync,
} from 'fs';
import fse from 'fs-extra';
import OpenApi from '../route-builder/open-api.js';
import assertTypeIsObject from '../route-builder/assert-type-is-object.js';
import findName from '../route-builder/find-name.js';
import {
  FIRST_ARGUMENT,
} from '../constants.js';
import toFilename from '../route-builder/to-filename.js';

const write = (
  projectDir: string,
  name: string,
  method: string,
  uri: string,
  // eslint-disable-next-line max-params
) => {
  const stream = createWriteStream(
    projectDir + '/src/routes/main/' + toFilename(name,) + '.ts',
  );
  stream.write(
    `import {
  Task,
} from '@idrinth/api-bench';

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
  stream.end();
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
  mkdirSync(projectDir + '/src/routes/main', {
    recursive: true,
  },);
  if (pathToDoc.endsWith('.json',)) {
    buildFiles(fse.readJSONSync(pathToDoc, 'utf8',), projectDir,);
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
