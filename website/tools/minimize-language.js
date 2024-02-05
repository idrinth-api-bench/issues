import {
  readdirSync,
  readFileSync,
  writeFileSync,
  existsSync,
} from 'fs';

const parseYaml = (content) => {
  const lines = content.split('\n');
  const result = {};

  lines.forEach((line) => {
    const [i, j] = line.split(':');
    if (i && j) {
      result[i.trim()] = j.trim();
    }
  });

  return result;
};

const generateJSONFromYAML = (yamlPath, outputPath) => {
  if(existsSync(yamlPath)) {
    const content = readFileSync(yamlPath, 'utf8');
    const jsonData = parseYaml(content);
    writeFileSync(outputPath, JSON.stringify(jsonData, null, 2));
  }
};

const localesPath = './dist/locales';

for(const folder of readdirSync(localesPath, 'utf8')) {
  // those from json file
  const translationsPath = `${localesPath}/${folder}/translation.json`;

  if(existsSync(translationsPath)) {
    // read yaml, convert yaml to json, overwrite the original file
    generateJSONFromYAML(translationsPath, translationsPath);
  }
}


// Kept for myself to compare
// for (const folder of readdirSync('./dist/locales', 'utf8')) {
//     if (existsSync('./dist/locales/' + folder + '/translation.json')) {
//       const content = readFileSync('./dist/locales/' + folder + '/translation.json', 'utf8',);
//       writeFileSync('./dist/locales/' + folder + '/translation.json', JSON.stringify(JSON.parse(content,),),);
//   }
// }