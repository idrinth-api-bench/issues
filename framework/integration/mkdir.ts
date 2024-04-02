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
        try {
          unlinkSync(`${ TEMP_DIR }/${ file }`,);
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error(e,);
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
