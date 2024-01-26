import exec from './src/exec.js';
import {
  readdirSync,
} from 'fs';

exec('cd framework && npm install && npm run tsc', true,);
for (const folder of readdirSync(process.cwd() + '/examples')) {
  if (folder !== '.eslintrc.yml') {
    exec(`cd examples/${ folder } && npm install`, true,);
    exec(`cp -r ${ process.cwd() }/framework/* ${ process.cwd() }/examples/${ folder }/node_modules/@idrinth/api-bench/`, true,);
    exec(`rm -r ${ process.cwd() }/examples/${ folder }/node_modules/@idrinth/api-bench/node_modules`, true,);
  }
}
