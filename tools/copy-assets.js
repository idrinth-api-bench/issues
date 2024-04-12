import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'fs';

const targets = [
  '/mindmap/assets',
  '/documentation-website/src/assets',
  '/history-website/src/assets',
];

for (const file of readdirSync(process.cwd() + '/assets',)) {
  for (const target of targets) {
    if (! existsSync(process.cwd() + target,)) {
      mkdirSync(process.cwd() + target,);
    }
    if (existsSync(process.cwd() + target + '/' + file,)) {
      rmSync(process.cwd() + target + '/' + file,);
    }
    writeFileSync(
      process.cwd() + target + '/' + file,
      readFileSync(process.cwd() + '/assets/' + file, 'binary',),
      'binary',
    );
  }
}
