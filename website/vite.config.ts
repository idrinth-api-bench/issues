import {
  defineConfig,
} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
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
