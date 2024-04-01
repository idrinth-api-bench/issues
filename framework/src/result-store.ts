import {
  writeFileSync,
  readFileSync,
  existsSync,
  mkdirSync,
} from 'fs';
import {
  createHash,
} from 'crypto';
import {
  sep,
} from 'path';
import {
  EMPTY,
  FRAMEWORK_ROOT,
  TWO,
  TEMP_DIR,
} from './constants.js';

const hash = createHash('sha256',)
  .update(FRAMEWORK_ROOT,)
  .digest('hex',);
const cacheFolder: string = TEMP_DIR + sep + 'api-bench';

export default {
  get(defaulted: boolean,): boolean {
    if (! existsSync(cacheFolder + sep + 'r' + hash,)) {
      return defaulted;
    }
    return readFileSync(cacheFolder + sep + 'r' + hash, 'utf8',) === 'true';
  },
  set(value: boolean,): void {
    let counter = TWO;
    while (! existsSync(cacheFolder,) && counter >= EMPTY) {
      mkdirSync(cacheFolder, {
        recursive: true,
      },);
      counter --;
    }
    writeFileSync(
      cacheFolder + sep + 'r' + hash,
      value ? 'true' : 'false',
      'utf8',
    );
  },
};
