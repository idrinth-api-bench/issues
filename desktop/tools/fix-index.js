import {
  readFileSync,
  writeFileSync,
} from 'fs';

writeFileSync(
  './dist/index.html',
  readFileSync('./dist/index.html', 'utf8',)
    .replace(/src="\//ug, 'src="',)
    .replace(/href="\//ug, 'href="',),
  'utf8',
);
