import {
  TEMP_DIR,
} from '../src/constants';
import {mkdirSync} from "fs-extra";

mkdirSync(TEMP_DIR, {
  recursive: true,
},);
