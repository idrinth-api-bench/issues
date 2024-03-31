import { readdirSync, statSync } from 'fs';
import exec from './src/exec.js';

const folders = [
  'framework',
  'documentation-website',
  'history-website',
  'cli',
];

const delay = (time,) => new Promise((resolve,) => setTimeout(resolve, time,),);
const cwd = process.cwd();
let last = Date.now();
while (true) {
  const now = Date.now();
  for (const folder of folders) {
    let modified = false;
    for (const file of readdirSync(`${ cwd }/${ folder }/language`, 'utf8',)) {
      if (file.endsWith('.yml',)) {
        const stats = statSync(`${ cwd }/${ folder }/language/${ file }`,);
        if (stats.mtimeMs < now && stats.mtimeMs >= last) {
          modified = true;
          break;
        }
      }
    }
    if (modified) {
      exec(`cd ${ cwd }/${ folder } && npm run language`, true,);
    }
  }
  last = now;
  // eslint-disable-next-line no-await-in-loop
  await delay(100,);
}
