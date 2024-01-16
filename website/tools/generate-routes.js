import {
  readdirSync,
  writeFileSync,
  statSync,
} from 'fs';

const data = [];
const overrides = {
  home: '/',
  'not-found': '*',
}
const paddedDate = (date) => {
  let data = `${ date.getUTCFullYear() }-`;
  if (date.getUTCMonth() < 9) {
    data += '0';
  }
  data += `${ date.getUTCMonth() + 1 }-`;
  if (date.getUTCDate() < 10) {
    data += '0';
  }
  data += `${ date.getUTCDate()}`;
  return data;
}

let xml = '<?xml version="1.0" encoding="UTF-8"?>';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
for (const file of readdirSync('./src/pages', {encoding: 'utf8', recursive: true})) {
  if (file.endsWith('/index.tsx') || file.endsWith('\\index.tsx')) {
    const mtime = statSync('./src/pages/' + file).mtime;
    const changed = paddedDate(mtime);
    const path = file.replace(/\\/ug, '/').replace(/\/index\.tsx$/, '');
    if (typeof overrides[path] === 'string') {
      data.push({
        path,
        override: overrides[path],
      });
      if (overrides[path] !== '*') {
        xml += `<url><loc>https://idrinth-api-ben.ch${overrides[path]}/</loc>`;
        xml += `<lastmod>${changed}</lastmod></url>`;
      }
    } else {
      data.push({
        path,
      });
      xml += `<url><loc>https://idrinth-api-ben.ch/${ path }/</loc>`;
      xml += `<lastmod>${ changed }</lastmod></url>`;
    }
  }
}
xml += '</urlset>'

writeFileSync('./src/routes.json', JSON.stringify(data));
writeFileSync('./public/sitemap.xml', xml);
