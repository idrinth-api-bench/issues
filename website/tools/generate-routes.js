import {
  readdirSync,
  writeFileSync,
} from 'fs';

const data = [];

for (const file of readdirSync('./src/pages', {encoding: 'utf8', recursive: true})) {
  if (file.endsWith('index.tsx')) {
    const path = file.replace(/\\/ug, '/').replace(/\/index\.tsx$/, '');
    if ((file.includes('home'))) {
      data.push({
        path,
        override: '/',
      });
    } else if (file.includes('not-found')) {
      data.push({
        path,
        override: '*',
      });
    } else {
      data.push({
        path,
      });
    }
  }
}

writeFileSync('./src/routes.json', JSON.stringify(data));
