import {
  writeFileSync,
  readFileSync,
  existsSync,
  mkdirSync,
  rmdirSync,
} from 'fs';
import fsExtra from 'fs-extra/esm';
import {
  tmpdir,
} from 'os';
import {
  createHash,
} from 'crypto';
import {
  sep,
} from 'path';
import language from './helper/language.js';
import {
  FRAMEWORK_ROOT,
} from './constants.js';

const hash = createHash('sha256',)
  .update(FRAMEWORK_ROOT,)
  .digest('hex',);
const id = hash + process.pid;
const cacheFolder: string = tmpdir() + sep + 'api-bench' + sep + '_' + id;
const keyCheck = /^[a-z0-9.]+$/u;

export default {
  get(key: string, defaulted: string,): string {
    if (! keyCheck.test(key,)) {
      throw new Error(language('invalid_key', key,),);
    }
    if (! existsSync(cacheFolder + sep + key,)) {
      return defaulted;
    }
    return readFileSync(cacheFolder + sep + key,) + '';
  },
  set(key: string, value: string,): void {
    if (! keyCheck.test(key,)) {
      throw new Error(language('invalid_key', key,),);
    }
    if (! existsSync(cacheFolder,)) {
      mkdirSync(cacheFolder, {
        recursive: true,
      },);
    }
    writeFileSync(cacheFolder + sep + key, value,);
  },
  async clean(): Promise<void> {
    if (existsSync(cacheFolder,)) {
      await fsExtra.emptyDir(cacheFolder,);
      rmdirSync(cacheFolder,);
    }
  },
};
