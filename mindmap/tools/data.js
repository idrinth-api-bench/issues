import {
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
} from 'fs';
import {
  parse,
} from 'yaml';
import {
  fillTemplate,
} from 'markmap-render';
import {
  minify as hminify,
} from 'html-minifier';
import {
  minify as jminify,
} from 'terser';
import {
  createHash,
} from 'crypto';
import cminify from 'css-simple-minifier';
import {
  Transformer,
} from '@napi-rs/image';

const FIRST = 0;
const SECOND = 1;
const cwd = process.cwd();
const data = parse(readFileSync(`${ cwd }/data.yml`, 'utf8',),);
const attributes = 'rel=noreferrer target=_blank';
// eslint-disable-next-line complexity
const convert = (node,) => {
  const nN = {};
  const title = node.description ? ` title="${ node.description }"` : '';
  const img = node.image
    ? ` data-image=${ node.image } onmouseover="show(this)"`
    : '';
  const text = node.text;
  const icon = img ? '&#128444;' : '';
  const url = node.url;
  nN.content = node.url
    ? `<a
${ attributes }${ img }
href="${ url }"${ title }>${ text }${ icon }</a>`
    : `<span${ title }${ img }>${ text }${ icon }</span>`;
  if (node.children) {
    nN.children = [];
    for (const child of node.children) {
      nN.children.push(convert(child,),);
    }
  }
  return nN;
};
let html = fillTemplate(
  convert(data,),
  {},
  {
    jsonOptions: {
      color: [ '###REPLACE-ME-COLOUR###', ],
    },
  },
);
html = html.replace(
  '<title>Markmap</title>',
  '<title>MindMap | @idrinth-api-bench/api-bench</title>',
);
html = hminify(
  html,
  {
    collapseBooleanAttributes: true,
    conservativeCollapse: false,
    collapseWhitespace: true,
    removeAttributeQuotes: true,
    removeComments: true,
  },
);
if (! existsSync(`${ cwd }/dist`,)) {
  mkdirSync(`${ cwd }/dist`,);
}
if (! existsSync(`${ cwd }/cache`,)) {
  mkdirSync(`${ cwd }/cache`,);
}
const css = readFileSync(`${ cwd }/src/index.css`, 'utf8',);
const ch = createHash('sha256',)
  .update(css,)
  .digest('hex',);
writeFileSync(
  `${ cwd }/dist/${ ch }.min.css`,
  cminify(css,),
  'utf8',
);
const js = readFileSync(`${ cwd }/src/show.js`, 'utf8',);
const jsh = createHash('sha256',)
  .update(js,)
  .digest('hex',);
writeFileSync(
  `${ cwd }/dist/${ jsh }.min.js`,
  (await jminify(js,)).code,
  'utf8',
);
html = html.replace(
  '</head>',
  '<link rel=icon type=image/svg+xml href=favicon.svg />' +
  `<link rel=stylesheet type=text/css href=${ ch }.min.css />` +
  `<script type=module src=${ jsh }.min.js ></script>` +
  '</head>',
);
html = html
  .replace(
    /(<\/body>)/u,
    '<div id=markmap>' +
    '<picture>' +
    '<source srcset=markmap.avif type="image/avif" />' +
    '<source srcset=markmap.webp type="image/webp" />' +
    '<img src=markmap.png alt=Markmap />' +
    '</picture>' +
    '<span>Powered by</span>' +
    `<a href=https://markmap.js.org/ ${ attributes }>Markmap</a>` +
    '</div>' +
    '<div id=iab>' +
    `<a href=https://idrinth-api-ben.ch/ ${ attributes }>` +
    '<img src=iab.svg alt="@idrinth-api-bench/api-bench" />' +
    '</a>' +
    '</div>$1',
  );
for (const match of html.matchAll(/<style>([^<]+)<\/style>/ug,)) {
  html = html.replace(match[FIRST], '',);
}
const scripts = [];

for (const match of html.matchAll(/<script src=([^ >]+)><\/script>/ug,)) {
  scripts.push(match,);
}
await Promise.all(scripts.map(async(match,) => {
  const hash = createHash('sha256',)
    .update(match[SECOND],)
    .digest('hex',);
  if (! existsSync(`${ cwd }/cache/${ hash }.min.js`,)) {
    let script = await (await fetch(match[SECOND],)).text();
    if (match[SECOND].match(/markmap-view/u,)) {
      script = script
        .replace(
          /(const mm = new Markmap\(svg, opts\);)/u,
          'opts.embedGlobalCSS=false;$1',
        );
    }
    if (! match[SECOND].match(/\.min\.js$/u,)) {
      script = (await jminify(script,)).code;
    }
    writeFileSync(
      `${ cwd }/cache/${ hash }.min.js`,
      script,
      'utf8',
    );
  }
  if (! existsSync(`${ cwd }/dist/${ hash }.min.js`,)) {
    writeFileSync(
      `${ cwd }/dist/${ hash }.min.js`,
      readFileSync(`${ cwd }/cache/${ hash }.min.js`, 'utf8',),
      'utf8',
    );
  }
  html = html.replace(
    match[FIRST],
    `<script src=${ hash }.min.js></script>`,
  );
},),);
for (const match of html.matchAll(/<script>((.|\n)+?)<\/script>/ug,)) {
  const hash = createHash('sha256',)
    .update(match[SECOND],)
    .digest('hex',);
  if (! existsSync(`${ cwd }/cache/${ hash }.min.js`,)) {
    const script = match[SECOND]
      .replace(
        '"###REPLACE-ME-COLOUR###"',
        `(() => {
          const darkMode = window
            .matchMedia('(prefers-color-scheme: dark)',)
            .matches;
          return darkMode ? 'white' : 'black';
        })()`,
      );
    writeFileSync(
      `${ cwd }/cache/${ hash }.min.js`,
      // eslint-disable-next-line no-await-in-loop
      (await jminify(script,)).code,
      'utf8',
    );
  }
  if (! existsSync(`${ cwd }/dist/${ hash }.min.js`,)) {
    writeFileSync(
      `${ cwd }/dist/${ hash }.min.js`,
      readFileSync(`${ cwd }/cache/${ hash }.min.js`, 'utf8',),
      'utf8',
    );
  }
  html = html.replace(
    match[FIRST],
    `<script src=${ hash }.min.js></script>`,
  );
}
for (const file of readdirSync(`${ cwd }/assets`,)) {
  writeFileSync(
    `${ cwd }/dist/${ file }`,
    readFileSync(`${ cwd }/assets/${ file }`, 'binary',),
    'binary',
  );
}
writeFileSync(
  `${ cwd }/dist/index.html`,
  html,
  'utf8',
);
for (const file of readdirSync(`${ cwd }/public`, 'utf8',)) {
  writeFileSync(
    `${ cwd }/dist/${ file }`,
    readFileSync(`${ cwd }/public/${ file }`, 'utf8',),
    'utf8',
  );
}
const IMAGE_QUALITY = 90;
for (const file of readdirSync(`${ cwd }/dist`, 'utf8',)) {
  if (file.endsWith('.jpg',) || file.endsWith('.png',)) {
    const raw = readFileSync(`${ cwd }/dist/${ file }`,);
    const transformer = new Transformer(raw,);
    writeFileSync(
      `${ cwd }/dist/${ file.replace(/(png|jpg)$/u, 'webp',) }`,
      transformer.webpSync(IMAGE_QUALITY,),
    );
    writeFileSync(
      `${ cwd }/dist/${ file.replace(/(png|jpg)$/u, 'avif',) }`,
      transformer.avifSync({
        quality: IMAGE_QUALITY,
      },),
    );
  }
}
