import {
  readdirSync,
  writeFileSync,
} from 'fs';

const data = [];
const overrides = {
  home: '/',
  'not-found': '*',
}

for (const file of readdirSync('./src/pages', {encoding: 'utf8', recursive: true})) {
  if (file.endsWith('index.tsx')) {
    const path = file.replace(/\\/ug, '/').replace(/\/index\.tsx$/, '');
    if (typeof overrides[path] === 'string') {
      data.push({
        path,
        override: overrides[path],
      });
    } else {
      data.push({
        path,
      });
    }
  }
}

writeFileSync('./src/routes.json', JSON.stringify(data));
