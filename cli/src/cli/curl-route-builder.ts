import language from '../helper/language.js';
import {
  createWriteStream,
  mkdirSync,
} from 'fs';
import {
  EMPTY,
  FIRST_ARGUMENT,
  INDENTATION_SPACES,
  KEY_INDEX,
  SPLIT_LIMIT,
  VALUE_INDEX,
} from '../constants.js';
import toFilename from '../route-builder/to-filename.js';
import crypto from 'crypto';

interface HashMap {
  [key: string]: string;
}

interface Request {
  method: string;
  headers?: HashMap;
  cookies?: HashMap;
  body?: string;
  autohandle?: 'json'|'form';
  url: string;
  maxDuration?: number;
}

const write = (
  projectDir: string,
  name: string,
  request: string,
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
  main: ${ request },
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

const stringify = (request: Request,) : string => {
  const json = JSON.stringify(request, null, INDENTATION_SPACES,);
  let processedStr = '';
  let isEscape = false;

  for (const char of json) {
    if (isEscape) {
      isEscape = false;
      processedStr = processedStr + char;
    } else if (char === '\\') {
      isEscape = true;
      processedStr = processedStr + char;
    } else if (char === '"') {
      processedStr = processedStr + '\'';
    } else {
      processedStr = processedStr + char;
    }
  }

  return processedStr;
};

const buildFile = (request: Request, projectDir: string,) => {
  let hashData = '';
  for (const key in request) {
    if (request[key]) {
      hashData = hashData + request[key];
    }
  }

  const hash = crypto
    .createHash('sha256',)
    .update(hashData,)
    .digest('hex',);
  write(projectDir, hash, stringify(request,),);

};

const curlArgumentConfig = {
  '--request': (value: string, request: Request,) => {
    request.method = value.toLowerCase();
  },
  '--header': (value: string, request: Request,) => {
    const header = value.split(':', SPLIT_LIMIT,);
    // eslint-disable-next-line no-magic-numbers
    if (header.length !== 2) {
      return;
    }
    if (! request.headers) {
      request.headers = {};
    }
    request.headers[header[KEY_INDEX].trim()]=header[VALUE_INDEX].trim();
  },
  '--data': (value: string, request: Request,) => {
    request.body = value;
  },
  '--max-time': (value: string, request: Request,) => {
    request.maxDuration = Number(value,);
  },
  '--cookie': (value: string, request: Request,) => {
    for (const cookieComponent of value.split(';',)) {
      const cookie = cookieComponent.split(':', SPLIT_LIMIT,);
      // eslint-disable-next-line no-magic-numbers
      if (cookie.length !== 2) {
        return;
      }
      if (! request.cookies) {
        request.cookies = {};
      }
      request.cookies[cookie[KEY_INDEX].trim()]=cookie[VALUE_INDEX].trim();
    }
  },
};

// eslint-disable-next-line complexity
const argumentHandler = (
  parameter: string,
  value: string,
  request: Request,
): void => {
  switch (parameter) {
    case '--request': case '-X':
      curlArgumentConfig['--request'](value, request,);
      break;
    case '--header': case '-H':
      curlArgumentConfig['--header'](value, request,);
      break;
    case '--data': case '-d':
      curlArgumentConfig['--data'](value, request,);
      break;
    case '--max-time': case '-m':
      curlArgumentConfig['--max-time'](value, request,);
      break;
    case '--cookie': case '-b':
      curlArgumentConfig['--cookie'](value, request,);
      break;
  }
};

export default (args: string[], projectDir: string,) => {
  const request: Request = {
    method: 'get',
    url: '',
  };

  for (let argIndex=0; argIndex<FIRST_ARGUMENT; argIndex ++) {
    args.shift();
  }

  while (args.length >= FIRST_ARGUMENT) {
    const parameter = args.shift();
    const value = args.shift();
    argumentHandler(parameter, value, request,);
  }

  if (args.length === EMPTY) {
    throw new Error(language('no_url_given',),);
  }

  request.url = args.shift();

  buildFile(request, projectDir,);
  mkdirSync(projectDir + '/src/routes/main', {
    recursive: true,
  },);
};
