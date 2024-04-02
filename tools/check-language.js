import {
  existsSync,
  readdirSync,
  readFileSync,
} from 'fs';
import yaml from 'yaml';

const EXIT_SUCCESS = 0;
const EXIT_FAILURE = 1;
const FIRST_ARGUMENT = 2;
const EMPTY = 0;

const folder = process.argv[FIRST_ARGUMENT];

if (! existsSync(`${ folder }/language`,)) {
  console.error(`folder ${ folder }/language doesn't exist`,);
  process.exit(EXIT_FAILURE,);
}
console.log(`Checking translations in folder ${ folder }/language`,);
console.log('',);
const yamlFiles = readdirSync(`${ folder }/language`,)
  .filter((file,) => file.endsWith('.yml',),);
const keys = {
  en: [],
};
let errors = 0;
yamlFiles.forEach((yamlFile,) => {
  const lang = yamlFile.replace('.yml', '',);
  keys[lang] = [];
  const yamlPath = `${ folder }/language/${ yamlFile }`;

  const content = readFileSync(yamlPath, 'utf8',);

  const loadKeys = (object, prefix = '',) => {
    for (const key of Object.keys(object,)) {
      if (typeof object[key] === 'string') {
        keys[lang].push(prefix + key,);
      } else {
        loadKeys(
          object[key],
          prefix + key + '.',
        );
      }
    }
  };
  try {
    const jsonData = yaml.parse(content,);
    loadKeys(jsonData,);
  } catch (e) {
    console.error(`Failed parsing ${ yamlPath }: ${ e }`,);
    errors ++;
  }
},);
let warnings = 0;
for (const lang of Object.keys(keys,)) {
  if (lang !== 'en') {
    const tooMany = keys[lang].filter((key,) => ! keys.en.includes(key,),);
    const missing = keys.en.filter((key,) => ! keys[lang].includes(key,),);
    for (const key of tooMany) {
      errors ++;
      console.error(
        `ERROR: ${ lang } defines ${ key }, that doesn't exist in english.`,
      );
    }
    for (const key of missing) {
      warnings ++;
      console.warn(
        `WARN: ${ lang } lacks ${ key }, that is defined in english.`,
      );
    }
  }
}
console.log('',);
console.log(`Found ${ errors } errors and ${ warnings } warnings.`,);
process.exit(errors > EMPTY ? EXIT_FAILURE : EXIT_SUCCESS,);
