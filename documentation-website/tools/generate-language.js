import {
  readdirSync,
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync
} from 'fs';
import yaml from 'yaml';
import { dirname } from 'path';

const originDir = 'language';
const targetDir = 'src/locales';

const yamlFiles = readdirSync('language').filter(file => file.endsWith('.yml'));

const files = [];
yamlFiles.forEach((yamlFile) => {
  const lang = yamlFile.replace('.yml', '');
  const yamlPath = `${originDir}/${yamlFile}`;

  if (!existsSync(targetDir)) {
    mkdirSync(targetDir, { recursive: true });
  }

  const content = readFileSync(yamlPath, 'utf8');
  const jsonData = yaml.parse(content);
  for (const key of Object.keys(jsonData)) {
    const ts = JSON.stringify(jsonData[key], undefined, 2,)
      .replace(/"([a-z][^"-]+?)":/ug, '$1:')
      .replace(/"([^"]+?)":/ug, '\'$1\':')
      .replace(/\n/ug, ',\n')
      .replace(/,,/ug, ',')
      .replace(/\{,/ug, '{')
      .replace(/'/ug, '\\\'')
      .replace(/\\'(.*?)\\':/ug, '\'$1\':')
      .replace(/: "(.+?)",/ug, ': \'$1\',');
    writeFileSync(
      `${targetDir}/${lang}-${key}.ts`,
      `/* eslint max-len:0 */\nconst lang = ${ ts };\n\nexport default lang;\n`,
    );
    files.push(`${lang}-${key}`);
  }
  if (lang === 'en') {
    const keys = [];
    const loadKeys = (object, prefix = '') => {
      for (const key of Object.keys(object)) {
        if (typeof object[key] === 'string') {
          keys.push(prefix + key,);
        } else {
          loadKeys(
            object[key],
            prefix + key + '.',
          );
        }
      }
    };
    loadKeys(jsonData,);
    writeFileSync(
      targetDir + '/language-key.ts',
      `/* eslint max-len:0 */\ntype languageKey = '${ keys.join('\'|\'') }';\nexport default languageKey;\n`,
    );
  }
});
const languages = JSON.stringify(
  yamlFiles
    .map(k => k.replace(/\.yml$/u, '')),
  undefined,
  2,
)
  .replace(/"/ug, '\'')
  .replace(/'\n/ug, '\',\n');
writeFileSync(
  targetDir + '/languages.ts',
  `/* eslint max-len:0 */\nconst languages = ${ languages };\nexport default languages;\n`,
);
writeFileSync(
  targetDir + '/files.ts',
  `/* eslint max-len:0 */\nconst files = ${ JSON.stringify(files).replace(/"/ug, '\'',) };\nexport default files;\n`,
);
