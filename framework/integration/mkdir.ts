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
    for (const file of readdirSync(TEMP_DIR,)) {
      const stats = statSync(`${ TEMP_DIR }/${ file }`,);
      if (stats.isFile()) {
        unlinkSync(`${ TEMP_DIR }/${ file }`,);
      }
    }
    return;
  }
  mkdirSync(TEMP_DIR, {
    recursive: true,
    mode: 777,
  },);
};
