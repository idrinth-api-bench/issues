import exec from './src/exec.js';
import runInAll from './src/run-in-all.js';

runInAll('npm ci',);
exec('cd documentation-website && npm run build', true,);
