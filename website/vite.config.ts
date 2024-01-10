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
        contributing: 'src/pages/contributing/index.tsx',
        home: 'src/pages/home/index.tsx',
        imprint: 'src/pages/imprint/index.tsx',
        license: 'src/pages/license/index.tsx',
        'not-found': 'src/pages/not-found/index.tsx',
        usage: 'src/pages/usage/index.tsx',
        'usage/autowiring': 'src/pages/usage/autowiring/index.tsx',
        'usage/logging': 'src/pages/usage/logging/index.tsx',
        'usage/middlewares': 'src/pages/usage/middlewares/index.tsx',
        'usage/results': 'src/pages/usage/results/index.tsx',
        'usage/route': 'src/pages/usage/route/index.tsx',
        'usage/storage': 'src/pages/usage/storage/index.tsx',
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
