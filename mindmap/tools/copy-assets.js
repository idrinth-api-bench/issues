import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'fs';

const target = '/assets';

for (const file of readdirSync(process.cwd() + '/../assets',)) {
  if (! existsSync(process.cwd() + target,)) {
    mkdirSync(process.cwd() + target,);
  }
  if (existsSync(process.cwd() + target + '/' + file,)) {
    rmSync(process.cwd() + target + '/' + file,);
  }
  writeFileSync(
    process.cwd() + target + '/' + file,
    readFileSync(process.cwd() + '/../assets/' + file, 'binary',),
    'binary',
  );
}
