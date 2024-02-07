import {
  readdirSync,
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync
} from 'fs';

import yaml from 'yaml';
import { dirname } from 'path';

const generateJSONFromYAML = (yamlPath, outputPath) => {
  const content = readFileSync(yamlPath, 'utf8');
  const jsonData = yaml.parse(content);
  writeFileSync(outputPath, JSON.stringify(jsonData));
};

const originDir = 'language';
const targetDir = 'public/locales';

const yamlFiles = readdirSync('language').filter(file => file.endsWith('.yml'));

yamlFiles.forEach((yamlFile) => {
  const lang = yamlFile.replace('.yml', '');
  const yamlPath = `${originDir}/${yamlFile}`;
  const outputPath = `${targetDir}/${lang}/translation.json`;

  if (!existsSync(dirname(outputPath))) {
    mkdirSync(dirname(outputPath), { recursive: true });
  }

  generateJSONFromYAML(yamlPath, outputPath);
});