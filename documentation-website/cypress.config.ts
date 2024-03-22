import {
  defineConfig,
} from 'cypress';
import task from '@cypress/code-coverage/task';
import useBabelRC from '@cypress/code-coverage/use-babelrc';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config,) {
      task(on, config,);
      on('file:preprocessor', useBabelRC,);
      return config;
    },
    baseUrl: 'http://localhost:8080',
  },
},);
