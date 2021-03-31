import {
  writeFileSync, readFileSync, existsSync, rmdirSync, mkdirSync,
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

const hash = createHash('sha256',)
  .update(__dirname,)
  .digest('hex',);
const cachefolder: string = tmpdir() + sep + 'api-bench' + sep + '_' + hash;

export default {
  get(key: string, defaulted: string,): string {
    if (! key.match(/^[a-z0-9.]+$/u,)) {
      throw new Error('Invalid Key',);
    }
    if (! existsSync(cachefolder + sep + key,)) {
      return defaulted;
    }
    return readFileSync(cachefolder + sep + key,) + '';
  },
  set(key: string, value: string,): void {
    if (! key.match(/^[a-z0-9.]+$/u,)) {
      throw new Error('Invalid Key',);
    }
    if (! existsSync(cachefolder,)) {
      console.log(mkdirSync(cachefolder, {recursive: true,}));
    }
    writeFileSync(cachefolder + sep + key, value,);
  },
  clean(): void {
    rmdirSync(cachefolder, {
      recursive: true,
    },);
  },
};
