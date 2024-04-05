import {
  readFileSync,
  writeFileSync,
} from 'fs';
import readline from 'readline';
import {
  EMPTY,
  EXIT_SUCCESS,
} from './src/constants.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
},);
const get = () => new Promise((resolve,) => {
  rl.question(
    'Enter word to add: ',
    (word,) => {
      resolve(word,);
    },
  );
},);

const file = process.cwd() + '/.dictionary.txt';
const lines = readFileSync(file, 'utf8',)
  .split('\n',)
  .filter((e,) => e.length > EMPTY,);
// eslint-disable-next-line no-constant-condition
while (true) {
  // eslint-disable-next-line no-await-in-loop
  const toAdd = await get();
  if (toAdd === '') {
    console.log('Empty word, ending process.',);
    break;
  }
  console.log(`Adding word '${ toAdd }' if not in already.`,);
  if (! lines.includes(toAdd,)) {
    lines.push(toAdd,);
  }
}
lines.sort();
writeFileSync(file, lines.join('\n',) + '\n', 'utf8',);
console.log('Updated dictionary.',);
process.exit(EXIT_SUCCESS,);
