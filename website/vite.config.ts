import {
  defineConfig,
} from 'vite';
import react from '@vitejs/plugin-react';
import dynamicImportVariables from '@rollup/plugin-dynamic-import-vars';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [ dynamicImportVariables({
        errorWhenNoFilesFound: true,
      },), ],
      input: {
        index: 'index.html',
      },
      output: {
        entryFileNames: (chunkInfo,) => {
          if (chunkInfo.name === 'index') {
            return 'assets/main-[hash].js';
          }
          return 'assets/pages/[hash]/[name].js';
        },
      },
    },
  },
  plugins: [ react({
    babel: {
      plugins: [
        '@babel/plugin-syntax-import-attributes',
        'istanbul',
      ],
    },
  },), ],
},);
