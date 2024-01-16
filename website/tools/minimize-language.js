import {
  readdirSync,
  readFileSync,
  writeFileSync,
  existsSync,
} from 'fs';

for (const folder of readdirSync('./dist/locales', 'utf8')) {
    if (existsSync('./dist/locales/' + folder + '/translation.json')) {
      const content = readFileSync('./dist/locales/' + folder + '/translation.json', 'utf8',);
      writeFileSync('./dist/locales/' + folder + '/translation.json', JSON.stringify(JSON.parse(content,),),);
  }
}
