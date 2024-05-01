import {
  defineConfig,
} from 'vite';
import react from '@vitejs/plugin-react';
import plugin from '@idrinth/rollup-plugin-react-modular-css';
import istanbul from 'babel-plugin-istanbul';
import million from 'million/compiler';

const babelPlugins = [];
if (process.env.LIVE_SITE !== 'true') {
  babelPlugins.push(istanbul,);
}
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [ plugin(), ],
    },
  },
  plugins: [
    react({
      babel: {
        plugins: babelPlugins,
        generatorOpts: {
          importAttributesKeyword: 'with',
        },
      },
    },),
    million.vite({
      auto: true,
      telemetry: false,
    },),
  ],
},);
