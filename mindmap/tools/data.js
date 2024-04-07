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

const FIRST = 0;
const SECOND = 1;
const cwd = process.cwd();
const data = parse(readFileSync(`${ cwd }/data.yml`, 'utf8',),);
const attributes = 'rel=noreferrer target=_blank';
const convert = (node,) => {
  const nN = {};
  const title = node.description ? ` title="${ node.description }"` : '';
  nN.content = node.url
    ? `<a ${ attributes } href="${ node.url }"${ title }>${ node.text }</a>`
    : `<span${ title }>${ node.text }</span>`;
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
  '<title>MindMap | @idrinth/api-bench</title>',
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
html = html.replace(
  '</head>',
  '<link rel=icon type=image/svg+xml href=iab.svg />' +
  `<link rel=stylesheet type=text/css href=${ ch }.min.css />` +
  '</head>',
);
html = html
  .replace(
    /(<\/body>)/u,
    '<div id=markmap>' +
    '<img src=markmap.png alt=Markmap />' +
    '<span>Powered by</span>' +
    `<a href=https://markmap.js.org/ ${ attributes }>Markmap</a>` +
    '</div>' +
    '<div id=iab>' +
    `<a href=https://idrinth-api-ben.ch/ ${ attributes }>` +
    '<img src=iab.svg alt="@idrinth/api-bench" />' +
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
          return darkMode ? 'whyt' : 'bläck';
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
