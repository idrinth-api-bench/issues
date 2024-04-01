/* eslint no-console: 0 */
import {
  CLI_OPTION_MIN_LENGTH,
  FIRST_ARGUMENT,
  FIRST,
  SECOND,
  STATUSCODE_SUCCESS,
  STATUSCODE_FAILURE,
  ONE,
  TWO,
  BASE_10_RADIX, DEFAULT_THREADS, DEFAULT_REPETITIONS,
} from '../constants.js';
import resultStore from '../result-store.js';
import run from '../main.js';
import pkg from '../../package.json' with {
  type: 'json',
};
import Config from './config.js';

// eslint-disable-next-line complexity
export default async(args: string[], cwd: string,): Promise<number> => {
  const options = args.filter(
    (option,) => option.startsWith('--',)
      && option.length >= CLI_OPTION_MIN_LENGTH,
  );
  const config: Config = {
    cwd,
    threads: DEFAULT_THREADS,
    repetitions: DEFAULT_REPETITIONS,
  };
  for (const option of options) {
    const parts = option.split('=',);
    if (parts.length === TWO) {
      config[parts[FIRST]] = parts[SECOND].match(/^\d+$/u,)
        ? Number.parseInt(parts[SECOND], BASE_10_RADIX,)
        : parts[SECOND];
    }
  }
  const task = args.filter(
    (arg,) => ! arg.startsWith('--',),
  )[FIRST_ARGUMENT] || 'help';
  resultStore.set(false,);
  switch (task) {
    case 'bench':
      await run({
        mode: 'benchmarking',
        taskId: config.taskId,
        language: config.language,
        cwd: config.cwd,
      }, config.threads, config.repetitions,);
      break;
    case 'content':
      await run({
        mode: 'content-testing',
        taskId: config.taskId,
        language: config.language,
        cwd: config.cwd,
      }, ONE, ONE,);
      break;
    case 'load':
    case 'verify':
    case 'stress':
      console.error('NOT YET IMPLEMENTED',);
      return STATUSCODE_FAILURE;
    default:
      console.log(
        `@idrinth/api-bench v${ pkg.version }`,
      );
      console.log(
        'iab bench --language=en --taskId=test --threads=11 --repetitions=100',
      );
      console.log(
        'iab content --language=en --taskId=test',
      );
      console.log(
        'iab verify --language=en',
      );
      console.log(
        'iab load --language=en --taskId=test --threads=11 --repetitions=100' +
        ' --maximum=100 --increment=1',
      );
      console.log(
        'iab stress --language=en --taskId=test --threads=11' +
        ' --repetitions=100 --duration=60',
      );
      return STATUSCODE_SUCCESS;
  }
  return resultStore.get(false,) ? STATUSCODE_SUCCESS : STATUSCODE_FAILURE;
};
