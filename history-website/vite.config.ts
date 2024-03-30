import {
  defineConfig,
} from 'vite';
import {
  svelte,
} from '@sveltejs/vite-plugin-svelte';
import dynamicImportVariables from '@rollup/plugin-dynamic-import-vars';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dynamicImportVariables({
      include: '*.svelte',
    },),
    svelte(),
  ],
},);
