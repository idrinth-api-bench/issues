import {
  execSync,
} from 'child_process';

// eslint-disable-next-line no-undefined
const exec = (command, passthrough=false, logOverride = undefined,) => {
  console.log(logOverride ?? command,);
  const result = execSync(command, passthrough ? {
    stdio: 'inherit',
  } : {},) + '';
  if (! passthrough) {
    console.log(result,);
  }
  return result;
};

export default exec;
