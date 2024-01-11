import {
  execSync,
} from 'child_process';

const exec = (command) => {
  console.log(command);
  return execSync(command);
};

if (!process.argv[2]) {
  console.error('username missing');
  process.exit(1);
}
if (!process.argv[3]) {
  console.error('branch missing');
  process.exit(1);
}

const remotes = exec(`git remote`) + '';
if (!remotes.includes(process.argv[2])) {
  exec(`git remote add ${process.argv[2]} https://github.com/${process.argv[2]}/api-bench`);
}
exec(`git fetch ${process.argv[2]}`);
exec(`git checkout -B ${process.argv[2]}-${process.argv[3]} --track ${process.argv[2]}/${process.argv[3]}`);
exec(`git pull`);
exec('npm install');
exec('cd website && npm install');
exec('cd website && npm run build');
