import {
  defineConfig,
} from 'vite';
import react from '@vitejs/plugin-react';
import attributes from '@babel/plugin-syntax-import-attributes';
import plugin from '@idrinth/rollup-plugin-react-modular-css';
import istanbul from 'babel-plugin-istanbul';
import million from 'million/compiler';

const babelPlugins = [ attributes, ];
if (process.env.LIVE_SITE !== 'true') {
  babelPlugins.push(istanbul,);
}
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        importAttributesKey: 'with',
      },
      plugins: [
        {
          name: '@idrinth/vite-plugin-import-json',
          transform(code, id,) {
            if (! id.startsWith('node_modules',) && code.match(/json/ug,)) {
              console.log(id);
            }
          },
        }, plugin(), ],
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
