import {
  TEMP_DIR,
} from '../src/constants';
import {
  mkdirSync,
} from 'fs';

mkdirSync(TEMP_DIR, {
  recursive: true,
},);
