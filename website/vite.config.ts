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
