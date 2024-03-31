import {
  parse,
} from 'yaml';
import {
  existsSync,
  readFileSync,
} from 'fs';

export default (
  cwd: string,
  mode: 'benchmarking'|'content-testing'|'load-testing'|'stress-testing',
): string[] => {
  const file = cwd + '/.idrinth-api-bench.yml';
  if (! existsSync(file,)) {
    return [];
  }
  const config = parse(readFileSync(file, 'utf8',),);
  if (
    typeof config === 'object'
    && typeof config[mode] === 'object'
    && Array.isArray(config[mode],)
  ) {
    return config[mode];
  }
  return [];
};
