import exec from './src/exec.js';
import {
  readdirSync,
  readFileSync,
  writeFileSync,
  unlinkSync,
  rmdirSync,
  mkdirSync,
  statSync,
  existsSync
} from 'fs';

const copy = (from, to) => {
  if (!existsSync(process.cwd() + to)) {
    mkdirSync(process.cwd() + to);
  }
  for (const file of readdirSync(process.cwd() + from, {encoding: 'utf8'})) {
    const data = statSync(process.cwd() + from);
    if (data.isDirectory()) {
      copy(from + '/' + file, to + '/' + file);
    } else {
      writeFileSync(process.cwd() + to + '/' + file, readFileSync(process.cwd() + from + '/' + file, 'utf8'), 'utf8');
    }
  }
}
const rm = (dir) => {
  if (!existsSync(process.cwd() + dir)) {
    return;
  }
  for (const file of readdirSync(process.cwd() + dir, {encoding: 'utf8'})) {
    const data = statSync(process.cwd() + dir);
    if (data.isDirectory()) {
      rm(dir + '/' + file);
    } else {
      unlinkSync(process.cwd() + dir + '/' + file);
    }
  }
  rmdirSync(process.cwd() + dir);
}

exec('cd framework && npm install && npm run tsc', true,);
for (const folder of readdirSync(process.cwd() + '/examples', {encoding: 'utf8'})) {
  if (folder !== '.eslintrc.yml') {
    exec(`cd examples/${ folder } && npm install`, true,);
    rm(`/examples/${ folder }/node_modules/@idrinth/api-bench`);
    copy('/framework', `/examples/${ folder }`);
  }
}
