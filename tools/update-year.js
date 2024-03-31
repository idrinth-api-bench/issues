import {
  readFileSync,
  writeFileSync,
} from 'fs';
import exec from './src/exec.js';

for (const file of [
  '/LICENSE',
  '/documentation-website/src/component/footer.tsx',
  '/documentation-website/src/pages/license.tsx',
]) {
  const content = readFileSync(`${ process.cwd() }${ file }`, 'utf-8',)
    .replace(
      new RegExp(`2020-${ new Date().getFullYear() }`, 'ug',),
      `2020-${ new Date().getFullYear() + 1 }`,
    );
  writeFileSync(
    `${ process.cwd() }${ file }`,
    content,
    'utf-8',
  );
}
exec('git commit -m "Update copyright year"', true,);
exec('git push', true,);
