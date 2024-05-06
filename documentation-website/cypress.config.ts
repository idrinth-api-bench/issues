import {
  defineConfig,
} from 'cypress';
import task from '@cypress/code-coverage/task';
import useBabelRC from '@cypress/code-coverage/use-babelrc';
import parallel from 'cypress-split';
import {
  writeFileSync,
  mkdirSync,
  existsSync,
} from 'fs';
import {
  ACCESSIBILITY_FILES_DIR,
} from './cypress/fixtures/constants';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config,) {
      parallel(on, config,);
      task(on, config,);
      on('file:preprocessor', useBabelRC,);
      // cypress axe logs
      on('task', {
        /*log(message,) {
          console.log(message,);
          return null;
        },*/
        writeFile({
          fileName,
          content,
        },) {
          if (! existsSync(ACCESSIBILITY_FILES_DIR,)) {
            mkdirSync(ACCESSIBILITY_FILES_DIR,);
          }
          writeFileSync(`${ ACCESSIBILITY_FILES_DIR }/${ fileName }`, content, {
            flag: 'w',
          },);
          return null;
        },
      },);
      return config;
    },
    baseUrl: 'http://localhost:8080',
  },
},);
