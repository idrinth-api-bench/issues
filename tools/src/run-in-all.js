import exec from './src/exec.js';

export default (command,) => {
  exec(command, true,);
  exec(`cd framework && ${ command }`, true,);
  exec(`cd documentation-website && ${ command }`, true,);
  exec(`cd history-website && ${ command }`, true,);
  exec(`cd history-website && ${ command }`, true,);
  exec(`cd history-microservice && ${ command }`, true,);
  exec(`cd mindmap && ${ command }`, true,);
};
