import {
  rmSync,
  readdirSync, existsSync,
} from 'fs';
import {
  fileURLToPath,
} from 'url';
const __dirname = fileURLToPath(new URL('.', import.meta.url,),);
const clearFolder = (folder,) => {
  for (const file of readdirSync(folder, {
    recursive: true,
  },)) {
    if (file.endsWith('.js',)) {
      rmSync(`${ folder }/${ file }`,);
    }
  }
};
clearFolder(__dirname + '../src',);
if (existsSync(__dirname + '../index.js',)) {
  rmSync(__dirname + '../index.js',);
}
