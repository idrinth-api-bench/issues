import {
  writeFileSync, readFileSync, existsSync, mkdirSync,rmdirSync
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
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url,),);

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
      mkdirSync(cachefolder, {
        recursive: true,
      },);
    }
    writeFileSync(cachefolder + sep + key, value,);
  },
  async clean(): void {
    if (existsSync(cachefolder,)) {
      await fsExtra.emptyDir(cachefolder);
      rmdirSync(cachefolder,);
    }
  },
};
