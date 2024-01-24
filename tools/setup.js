import exec from './src/exec.js';

exec('npm install', true,);
exec('cd framework && npm install', true,);
exec('cd website && npm install', true,);
exec('cd website && npm run build', true,);
