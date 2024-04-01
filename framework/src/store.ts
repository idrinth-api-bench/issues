import {
  writeFileSync,
  readFileSync,
  existsSync,
  readdirSync,
  unlinkSync,
} from 'fs';
import {
  createHash,
} from 'crypto';
import {
  sep,
} from 'path';
import language from './helper/language.js';
import {
  FRAMEWORK_ROOT,
  TEMP_DIR,
} from './constants.js';

const hash = createHash('sha256',)
  .update(FRAMEWORK_ROOT,)
  .digest('hex',);
const keyCheck = /^[a-z0-9.]+$/u;

export default {
  get(key: string, defaulted: string,): string {
    if (! keyCheck.test(key,)) {
      throw new Error(language('invalid_key', key,),);
    }
    if (! existsSync(TEMP_DIR + sep + 'api-bench_' + hash + key,)) {
      return defaulted;
    }
    return readFileSync(TEMP_DIR + sep + 'api-bench_' + hash + key, 'utf8',);
  },
  set(key: string, value: string,): void {
    if (! keyCheck.test(key,)) {
      throw new Error(language('invalid_key', key,),);
    }
    writeFileSync(TEMP_DIR + sep + 'api-bench_' + hash + key, value,);
  },
  clean(): void {
    for (const file of readdirSync(TEMP_DIR, 'utf8')) {
      if (file.startsWith('api-bench_' + hash,)) {
        unlinkSync(TEMP_DIR + sep + file,);
      }
    }
  },
};
