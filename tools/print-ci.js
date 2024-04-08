import {
  parse,
  stringify,
} from 'yaml';
import {
  readdirSync, readFileSync,
} from 'fs';

const jobs = {};
for (const file of readdirSync(process.cwd() + '/.github/workflows',)) {
  const [
    type,
    name,
  ] = file.split('.',);
  if (name === 'codeql') {
    continue;
  }
  jobs[type] = jobs[type] ?? {};
  jobs[type][name] = {};
  const data = parse(
    readFileSync(process.cwd() + '/.github/workflows/' + file, 'utf8',),
  );
  for (const key of Object.keys(data.jobs,)) {
    const runs = [];
    for (const step of data.jobs[key].steps) {
      if (step.run && step.run.match(/npm run/u,) && ! step.run.endsWith('|| true',)) {
        runs.push(step.run.replace(/^ *| *$/ug, '',),);
      }
    }
    if (runs.length === 0) {
      continue;
    }
    if (data.jobs[key].strategy && data.jobs[key].strategy.matrix) {
      let combinations = [ '', ];
      for (const skey of Object.keys(data.jobs[key].strategy.matrix,)) {
        const newCombinations = [];
        for (const val of data.jobs[key].strategy.matrix[skey]) {
          for (const known of combinations) {
            newCombinations.push(
              `${ known }|${ skey }=${ val }`
                .replace(/^\|/u, '',),
            );
          }
        }
        combinations = newCombinations;
      }
      for (const combination of combinations) {
        jobs[type][`${ name }|${ combination }`] = {
          on: jobs[type][name].on,
        };
        jobs[type][`${ name }|${ combination }`].jobs = jobs[type][`${ name }|${ combination }`].jobs || {};
        jobs[type][`${ name }|${ combination }`].jobs[key] = runs[runs.length - 1];
      }
    } else {
      jobs[type][name].jobs = jobs[type][name].jobs || {};
      jobs[type][name].jobs[key] = runs[runs.length - 1];
    }
  }
}
for (const type of Object.keys(jobs,)) {
  for (const job of Object.keys(jobs[type],)) {
    if (! jobs[type][job].jobs) {
      delete jobs[type][job];
    }
  }
  if (Object.keys(jobs[type],).length === 0) {
    delete jobs[type];
  }
}
console.log(stringify(jobs,),);
