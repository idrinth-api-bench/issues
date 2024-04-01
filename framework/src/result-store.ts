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
  FRAMEWORK_ROOT,
  TEMP_DIR,
} from './constants.js';

const hash = createHash('sha256',)
  .update(FRAMEWORK_ROOT,)
  .digest('hex',);

export default {
  get(defaulted: boolean,): boolean {
    if (! existsSync(TEMP_DIR + sep + 'api-bench-r' + hash,)) {
      return defaulted;
    }
    return readFileSync(
      TEMP_DIR + sep + 'api-bench-r' + hash,
      'utf8',
    ) === 'true';
  },
  set(value: boolean,): void {
    writeFileSync(
      TEMP_DIR + sep + 'api-bench-r' + hash,
      value ? 'true' : 'false',
      'utf8',
    );
  },
};
