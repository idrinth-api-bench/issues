import runInAll from './src/run-in-all.js';

runInAll('rm -r node_modules || true',);
runInAll('rm package-lock.json || true',);
runInAll('npm install',);
