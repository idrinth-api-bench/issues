import Hashmap from '../../hashmap.js';
import {
  CLI_OPTION_MIN_LENGTH,
  DEFAULT_REPETITIONS,
  DEFAULT_THREADS,
  FIRST, FIRST_ARGUMENT,
  SECOND,
  TWO,
  FIVE,
} from '../../constants.js';
import Config from './config.js';
import {
  camelCase,
} from 'change-case';
import toValue from './to-value.js';

// eslint-disable-next-line complexity
export default (cwd: string, args: string[], env: Hashmap,) => {
  const options = args.filter(
    (option,) => option.startsWith('--',)
      && option.length >= CLI_OPTION_MIN_LENGTH,
  );
  const config: Config = {
    cwd,
    threads: DEFAULT_THREADS,
    repetitions: DEFAULT_REPETITIONS,
    task: args.filter(
      (arg,) => ! arg.startsWith('--',),
    )[FIRST_ARGUMENT] || 'help',
  };
  for (const key of Object.keys(env,)) {
    if (key.startsWith('IAB_',)) {
      config[camelCase(key.substring(FIVE,),)] = toValue(env[key],);
    }
  }
  for (const option of options) {
    const parts = option.split('=',);
    if (parts.length === TWO) {
      config[parts[FIRST]] = toValue(parts[SECOND],);
    }
  }
  return config;
};
