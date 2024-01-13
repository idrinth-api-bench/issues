import {
  execSync,
} from 'child_process';

const exec = (command, passthrough=false,) => {
  console.log(command,);
  const result = execSync(command, passthrough ? {
    stdio: 'inherit',
  } : {},) + '';
  if (! passthrough) {
    console.log(result,);
  }
  return result;
};

export default exec;
