import {
  readdirSync,
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync,
} from 'fs';
import yaml from 'yaml';

const originDir = 'language';
const targetDir = 'src/locales';

const yamlFiles = readdirSync('language',)
  .filter(file => file.endsWith('.yml',),);
yamlFiles.forEach((yamlFile) => {
  const lang = yamlFile.replace('.yml', '');
  const yamlPath = `${originDir}/${yamlFile}`;

  if (! existsSync(targetDir,)) {
    mkdirSync(targetDir, { recursive: true },);
  }

  const content = readFileSync(yamlPath, 'utf8');
  const jsonData = yaml.parse(content);
  const ts = JSON.stringify(jsonData, undefined, 2,)
    .replace(/"([a-z][^"-]+?)":/ug, '$1:')
    .replace(/"([^"]+?)":/ug, '\'$1\':')
    .replace(/\n/ug, ',\n')
    .replace(/,,/ug, ',')
    .replace(/\{,/ug, '{')
    .replace(/'/ug, '\\\'')
    .replace(/\\'(.*?)\\':/ug, '\'$1\':')
    .replace(/: "(.+?)",/ug, ': \'$1\',');
  writeFileSync(
    `${targetDir}/${lang}.ts`,
    `/* eslint max-len:0 */\nconst lang = ${ ts };\n\nexport default lang;\n`,
  );
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
