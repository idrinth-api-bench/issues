import {
  parse,
  stringify,
} from 'yaml';
import {
  readdirSync,
  readFileSync,
} from 'fs';
import {
  EMPTY,
  ARRAY_LENGTH_OFFSET,
} from './src/constants.js';

const allCombinations = (data, key,) => {
  let combinations = [ '', ];
  for (const skey of Object.keys(data.jobs[key].strategy.matrix,)) {
    const newCombinations = [];
    // eslint-disable-next-line max-depth
    for (const val of data.jobs[key].strategy.matrix[skey]) {
      // eslint-disable-next-line max-depth
      for (const known of combinations) {
        newCombinations.push(
          `${ known }|${ skey }=${ val }`
            .replace(/^\|/u, '',),
        );
      }
    }
    combinations = newCombinations;
  }
  return combinations;
};
// eslint-disable-next-line complexity
const allRuns = (data, key,) => {
  const runs = [];
  for (const step of data.jobs[key].steps) {
    if (
      step.run
      && step.run.match(/npm run/u,)
      && ! step.run.match(/npm ci/u,)
      && ! step.run.endsWith('|| true',)
    ) {
      runs.push(step.run.replace(/(^ *)|( *$)/ug, '',),);
    }
  }
  return runs;
};

const jobs = {};
let total = 0;
let provided = 0;

// eslint-disable-next-line max-params
const addCombination = (combination, type, name, key, runs,) => {
  jobs[type][`${ name }|${ combination }`] = {};
  const nm = `${ name }|${ combination }`;
  jobs[type][nm] = jobs[type][nm] || {};
  jobs[type][nm][key] = runs[runs.length - ARRAY_LENGTH_OFFSET];
};
// eslint-disable-next-line max-params
const addSimple = (type, name, key, runs,) => {
  jobs[type][name] = jobs[type][name] || {};
  jobs[type][name][key] = runs[runs.length - ARRAY_LENGTH_OFFSET];
};
// eslint-disable-next-line max-params
const handleJob = (data, key, type, name,) => {
  const runs = allRuns(data, key,);
  if (runs.length === EMPTY) {
    total ++;
    return;
  }
  if (! data.jobs[key].strategy || ! data.jobs[key].strategy.matrix) {
    addSimple(type, name, key, runs,);
    total ++;
    return;
  }
  for (const combination of allCombinations(data, key,)) {
    total ++;
    addCombination(combination, type, name, key, runs,);
  }
};
const handleFile = (file,) => {
  const [
    type,
    name,
  ] = file.split('.',);
  jobs[type] = jobs[type] ?? {};
  jobs[type][name] = {};
  const data = parse(
    readFileSync(process.cwd() + '/.github/workflows/' + file, 'utf8',),
  );
  for (const key of Object.keys(data.jobs,)) {
    handleJob(data, key, type, name,);
  }
  if (name === 'codeql') {
    delete jobs[type][name];
  }
  if (type === 'cron') {
    delete jobs[type];
  }
};

for (const file of readdirSync(process.cwd() + '/.github/workflows',)) {
  handleFile(file,);
}
for (const type of Object.keys(jobs,)) {
  for (const job of Object.keys(jobs[type],)) {
    if (! jobs[type][job] || Object.keys(jobs[type][job],).length === EMPTY ) {
      delete jobs[type][job];
    } else {
      provided += Object.keys(jobs[type][job],).length;
    }
  }
  if (Object.keys(jobs[type],).length === EMPTY) {
    delete jobs[type];
  }
}
console.log(`You can run these ${ provided } of ${ total } jobs locally:`,);
console.log('',);
console.log(stringify(jobs,),);
