import {
  execSync,
} from 'child_process';

// eslint-disable-next-line no-undefined
const exec = (command, passthrough=false, logOverride = undefined,) => {
  if (typeof logOverride === 'undefined') {
    logOverride = command;
  }
  console.log(logOverride,);
  const result = execSync(command, passthrough ? {
    stdio: 'inherit',
  } : {},) + '';
  if (! passthrough) {
    console.log(result,);
  }
  return result;
};

export default exec;
