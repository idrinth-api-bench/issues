import exec from './src/exec.js';
import runInAll from "./src/run-in-all.js";

runInAll('npm install',);
exec('cd documentation-website && npm run build', true,);
