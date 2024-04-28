import {
  defineConfig,
} from 'vite';
import react from '@vitejs/plugin-react';
import plugin from '@idrinth/rollup-plugin-react-modular-css';
import attributes from '@babel/plugin-syntax-import-attributes';
import istanbul from 'babel-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [ plugin(), ],
    },
  },
  plugins: [ react({
    babel: {
      plugins: [
        attributes,
        istanbul,
      ],
    },
  },), ],
},);
