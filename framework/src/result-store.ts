import {
  writeFileSync,
  readFileSync,
  existsSync,
  mkdirSync,
} from 'fs';
import {
  tmpdir,
} from 'os';
import {
  createHash,
} from 'crypto';
import {
  sep,
} from 'path';
import {
  FRAMEWORK_ROOT,
} from './constants.js';

const hash = createHash('sha256',)
  .update(FRAMEWORK_ROOT,)
  .digest('hex',);
const id = hash + process.pid;
const cacheFolder: string = tmpdir() + sep + 'api-bench';

export default {
  get(defaulted: boolean,): boolean {
    if (! existsSync(cacheFolder + sep + 'r' + id,)) {
      return defaulted;
    }
    return readFileSync(cacheFolder + sep + 'r' + id, 'utf8',) === 'true';
  },
  set(value: boolean,): void {
    while (! existsSync(cacheFolder,)) {
      mkdirSync(cacheFolder, {
        recursive: true,
      },);
    }
    writeFileSync(
      cacheFolder + sep + 'r' + id,
      value ? 'true' : 'false',
      'utf8',
    );
  },
};
