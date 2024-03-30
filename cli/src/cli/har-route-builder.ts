import language from '../helper/language.js';
import {
  createWriteStream,
  mkdirSync,
} from 'fs';
import fse from 'fs-extra';
import assertTypeIsObject from '../route-builder/assert-type-is-object.js';
import {
  FIRST_ARGUMENT,
} from '../constants.js';
import toFilename from '../route-builder/to-filename.js';
import crypto from 'crypto';
import HAR from '../route-builder/har.js';

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

export default (): Task => ({
  id: '${ name }',
  main: {
    method: '${ method }',
    url: '${ uri }',
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

const buildFiles = (har: HAR, projectDir: string,) => {
  assertTypeIsObject(har.log,);
  assertTypeIsObject(har.log.entries,);
  for (const entry of har.log.entries) {
    assertTypeIsObject(entry,);
    assertTypeIsObject(entry.request,);
    const hash = crypto
      .createHash('sha256',)
      .update(entry.request.method + entry.request.url,)
      .digest('hex',);
    write(projectDir, hash, entry.request.method, entry.request.url,);
  }
};

export default (args: string[], projectDir: string,) => {
  const pathToDoc = args[FIRST_ARGUMENT];
  if (! pathToDoc) {
    throw new Error(language('no_har_document_given',),);
  }
  mkdirSync(projectDir + '/src/routes/main', {
    recursive: true,
  },);
  if (pathToDoc.endsWith('.har',)) {
    buildFiles(fse.readJSONSync(pathToDoc, 'utf8',), projectDir,);
    return;
  }
  throw new Error(language('cant_determine_valid_type',),);
};
