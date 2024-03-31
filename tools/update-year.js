import {
  readFileSync,
  writeFileSync,
} from 'fs';
import exec from './src/exec.js';

const year = new Date().getFullYear() + 1;
const previous = new Date().getFullYear();

exec('git config --global user.email "bot@idrinth-api-ben.ch"',);
exec('git config --global user.name "idrinth api bench bot"',);
exec(
  // eslint-disable-next-line no-template-curly-in-string
  'git checkout -b HEAD:${GITHUB_HEAD_REF:-${GITHUB_REF#refs/heads/}}',
  true,
);

for (const file of [
  '/LICENSE',
  '/documentation-website/src/components/footer.tsx',
  '/documentation-website/src/pages/license/index.tsx',
]) {
  const content = readFileSync(`${ process.cwd() }${ file }`, 'utf-8',)
    .replace(
      new RegExp(`2020-${ previous }`, 'ug',),
      `2020-${ year }`,
    );
  writeFileSync(
    `${ process.cwd() }${ file }`,
    content,
    'utf-8',
  );
}
exec('git add .',);
exec(`git commit -m "Update copyright year to ${ year }"`, true,);
exec(
  // eslint-disable-next-line no-template-curly-in-string
  'git push',
  true,
);
