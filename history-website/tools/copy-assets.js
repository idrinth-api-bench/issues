import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'fs';

const target = '/src/assets';

for (const file of readdirSync(process.cwd() + '/../assets', 'utf8',)) {
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
