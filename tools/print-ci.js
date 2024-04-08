import {
  parse,
  stringify,
} from 'yaml';
import {
  readdirSync, readFileSync,
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
      runs.push(step.run.replace(/^ *| *$/ug, '',),);
    }
  }
  return runs;
};

const jobs = {};

// eslint-disable-next-line max-params
const addCombination = (combination, type, name, key, runs,) => {
  jobs[type][`${ name }|${ combination }`] = {
    on: jobs[type][name].on,
  };
  const nm = `${ name }|${ combination }`;
  jobs[type][nm].jobs = jobs[type][nm].jobs || {};
  jobs[type][nm].jobs[key] = runs[runs.length - ARRAY_LENGTH_OFFSET];
};
// eslint-disable-next-line max-params
const addSimple = (type, name, key, runs,) => {
  jobs[type][name].jobs = jobs[type][name].jobs || {};
  jobs[type][name].jobs[key] = runs[runs.length - ARRAY_LENGTH_OFFSET];
};
// eslint-disable-next-line max-params
const handleJob = (data, key, type, name,) => {
  const runs = allRuns(data, key,);
  if (runs.length === EMPTY) {
    return;
  }
  if (! data.jobs[key].strategy || ! data.jobs[key].strategy.matrix) {
    addSimple(type, name, key, runs,);
    return;
  }
  for (const combination of allCombinations(data, key,)) {
    addCombination(combination, type, name, key, runs,);
  }
};
const handleFile = (file,) => {
  const [
    type,
    name,
  ] = file.split('.',);
  if (name === 'codeql') {
    return;
  }
  jobs[type] = jobs[type] ?? {};
  jobs[type][name] = {};
  const data = parse(
    readFileSync(process.cwd() + '/.github/workflows/' + file, 'utf8',),
  );
  for (const key of Object.keys(data.jobs,)) {
    handleJob(data, key, type, name,);
  }
};

for (const file of readdirSync(process.cwd() + '/.github/workflows',)) {
  handleFile(file,);
}
for (const type of Object.keys(jobs,)) {
  for (const job of Object.keys(jobs[type],)) {
    if (! jobs[type][job].jobs) {
      delete jobs[type][job];
    }
  }
  if (Object.keys(jobs[type],).length === EMPTY) {
    delete jobs[type];
  }
}
console.log(stringify(jobs,),);
