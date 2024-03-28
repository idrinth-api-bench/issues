import {
  defineConfig,
} from 'vite';
import react from '@vitejs/plugin-react';
import {plugin} from '@idrinth/rollup-plugin-react-modular-css';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
      },
      plugins: [ plugin(), ],
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
