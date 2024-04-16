import Hashmap from '../../hashmap.js';
import {
  DEFAULT_REPETITIONS,
  DEFAULT_THREADS,
  FIRST_ARGUMENT,
} from '../../constants.js';
import Config from './config.js';
import fromEnv from './from-env.js';
import fromCli from './from-cli.js';

// eslint-disable-next-line complexity
export default (cwd: string, args: string[], env: Hashmap,) => {
  const config: Config = {
    cwd,
    threads: DEFAULT_THREADS,
    repetitions: DEFAULT_REPETITIONS,
    task: args.filter(
      (arg,) => ! arg.startsWith('--',),
    )[FIRST_ARGUMENT] || 'help',
  };
  fromEnv(config, env,);
  fromCli(config, args,);
  return config;
};
