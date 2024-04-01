import exec from './src/exec.js';

exec('npm ci', true,);
exec('cd framework && npm ci', true,);
exec('cd documentation-website && npm ci', true,);
exec('cd documentation-website && npm run build', true,);
exec('cd history-website && npm ci', true,);
exec('cd history-website && npm ci', true,);
exec('cd history-microservice && npm ci', true,);
exec('cd mindmap && npm ci', true,);
