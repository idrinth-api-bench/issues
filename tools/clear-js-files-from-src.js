import {
  rmSync,
  readdirSync,
} from 'fs';
import {
  fileURLToPath,
} from 'url';
const __dirname = fileURLToPath(new URL('.', import.meta.url,),);
const clearFolder = (folder,) => {
  for (const file of readdirSync(folder, {
    recursive: true,
  },)) {
    if (file.match(/.*\.js/u,)) {
      rmSync(`${ folder }/${ file }`,);
    }
  }
};
clearFolder(__dirname + '../src',);
