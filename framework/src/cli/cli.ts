/* eslint no-console: 0 */
import {
  STATUSCODE_SUCCESS,
  STATUSCODE_FAILURE,
  ONE,
} from '../constants.js';
import resultStore from '../result-store.js';
import run from '../main.js';
import pkg from '../../package.json' with {
  type: 'json',
};
import configFactory from './config/config-factory.js';
import storageFactory from '../storage/storage-factory.js';

// eslint-disable-next-line complexity
export default async(args: string[], cwd: string,): Promise<number> => {
  const config = configFactory(cwd, args, process.env,);
  resultStore.set(false,);
  const storage = storageFactory(config,);
  switch (config.task) {
    case 'bench':
      await run({
        mode: 'benchmarking',
        taskId: config.taskId,
        language: config.language,
        cwd: config.cwd,
        resultStorage: storage,
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
        `@idrinth-api-bench/api-bench v${ pkg.version }`,
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
