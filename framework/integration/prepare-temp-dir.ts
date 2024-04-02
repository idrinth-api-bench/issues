import {
  TEMP_DIR,
} from '../src/constants';
import {
  existsSync,
  mkdirSync,
  readdirSync,
  unlinkSync,
  statSync,
} from 'fs';

// eslint-disable-next-line complexity
export default () => {
  if (existsSync(TEMP_DIR,)) {
    const dir = statSync(TEMP_DIR,);
    if (dir.isDirectory()) {
      for (const file of readdirSync(TEMP_DIR, 'utf8',)) {
        if (file.startsWith('api-bench',) || file.startsWith('result',)) {
          const f = `${ TEMP_DIR }/${ file }`;
          const stats = statSync(f,);
          // eslint-disable-next-line max-depth
          if (stats.isFile()) {
            unlinkSync(f,);
          }
        }
      }
    }
    return;
  }
  mkdirSync(TEMP_DIR, {
    recursive: true,
    mode: 777,
  },);
};
