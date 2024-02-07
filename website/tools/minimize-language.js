import {
  readdirSync,
  readFileSync,
  writeFileSync,
  existsSync,
} from 'fs';

import yaml from 'yaml';
import { dirname } from 'path';

const generateJSONFromYAML = (yamlPath, outputPath) => {
  if (existsSync(yamlPath)) {
    const content = readFileSync(yamlPath, 'utf8');
    const jsonData = yaml.parse(content);
    writeFileSync(outputPath, JSON.stringify(jsonData));
  }
};

const originDir = 'language';
const targetDir = 'public/locales';

const yamlFiles = readdirSync('language').filter(file => /\.yml$/.test(file));

yamlFiles.forEach((yamlFile) => {
  const lang = yamlFile.replace('.yml', '');
  const yamlPath = `${originDir}/${yamlFile}`;
  const outputPath = `${targetDir}/${lang}/translation.json`;

  if (!existsSync(dirname(outputPath))) {
    // create directory if it's not here
    mkdirSync(dirname(outputPath), { recursive: true });
  }

  generateJSONFromYAML(yamlPath, outputPath);
});

// Kept for myself to compare
// for (const folder of readdirSync('./dist/locales', 'utf8')) {
//     if (existsSync('./dist/locales/' + folder + '/translation.json')) {
//       const content = readFileSync('./dist/locales/' + folder + '/translation.json', 'utf8',);
//       writeFileSync('./dist/locales/' + folder + '/translation.json', JSON.stringify(JSON.parse(content,),),);
//   }
// }