import exec from './src/exec.js';

exec('npm install', true,);
exec('cd framework && npm install', true,);
exec('cd documentation-website && npm install', true,);
exec('cd documentation-website && npm run build', true,);
exec('cd history-website && npm install', true,);
exec('cd history-website && npm run build', true,);
exec('cd history-microservice && npm install', true,);
