import language from '../helper/language.js';
import {
  createWriteStream,
  mkdirSync,
} from 'fs';
import {
  FIRST_ARGUMENT,
  NEXT,
} from '../constants.js';
import toFilename from '../route-builder/to-filename.js';
import crypto from 'crypto';

interface RouteParams {
  url : string,
  methodSetter: string,
  requestInitSetter: string,
  headerSetter: string
}

const write = (
  projectDir: string,
  name: string,
  routeParams: RouteParams,
) => {
  const stream = createWriteStream(
    projectDir + '/src/routes/main/' + toFilename(name,) + '.ts',
  );
  stream.write(
    `import {
  Task,
} from '@idrinth/api-bench';

const requestInit : RequestInit = {};
${ routeParams.methodSetter }
${ routeParams.requestInitSetter }
const request: Request = new Request('${ routeParams.url }', requestInit,);
${ routeParams.headerSetter }

export default (): Task => ({
  id: '${ name }',
  main: request,
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

const buildFile = (routeParams: RouteParams, projectDir: string,) => {
  let hashData = '';
  hashData = routeParams.headerSetter +
  routeParams.methodSetter +
  routeParams.requestInitSetter + routeParams.url;
  const hash = crypto
    .createHash('sha256',)
    .update(hashData,)
    .digest('hex',);
  write(projectDir, hash, routeParams,);

};

const argumentHandlers = {
  '-X': (value: string, routeParams: RouteParams,) => {
    routeParams.methodSetter = `requestInit.method = '${ value }';\n`;
  },
  '-H': (value: string, routeParams: RouteParams,) => {
    const headerValues = value.split(':',);
    // eslint-disable-next-line no-magic-numbers
    if (headerValues.length !== 2) {
      throw new Error(language('invalid_request_property', '', 'header',),);
    }
    // eslint-disable-next-line no-magic-numbers
    routeParams.headerSetter=routeParams.headerSetter.concat(
      // eslint-disable-next-line max-len, no-magic-numbers
      `request.headers.append( '${ headerValues[0] } ' , '${ headerValues[1] }',);\n`,
    );
  },
  '-d': (value: string, routeParams: RouteParams,) => {
    routeParams.requestInitSetter=routeParams.requestInitSetter.concat(
      `requestInit.body = '${ value }';\n`,
    );
  },

};

export default (args: string[], projectDir: string,) => {
  const routeParams: RouteParams = {
    headerSetter: '',
    requestInitSetter: '',
    url: '',
    methodSetter: 'requestInit.method = \'GET\';\n',
  };
  // eslint-disable-next-line no-magic-numbers
  for (let argIndex=FIRST_ARGUMENT; argIndex<args.length-1; argIndex+=2) {
    argumentHandlers[args[argIndex]](args[argIndex+NEXT], routeParams,);
  }

  // eslint-disable-next-line no-magic-numbers
  routeParams.url = args[args.length-1];
  buildFile(routeParams, projectDir,);
  mkdirSync(projectDir + '/src/routes/main', {
    recursive: true,
  },);
};
