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

export default () => {
  if (existsSync(TEMP_DIR,)) {
    const dir = statSync(TEMP_DIR,);
    if (dir.isDirectory()) {
      for (const file of readdirSync(TEMP_DIR, 'utf8',)) {
        const f = `${ TEMP_DIR }/${ file }`;
        const stats = statSync(f,);
        if (stats.isFile() && file.startsWith('api-bench',)) {
          unlinkSync(f,);
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
