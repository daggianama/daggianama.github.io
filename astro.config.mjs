import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  projectRoot: './',
  public: './public/',
  dist: './dist/',
  src: './src/',
  renderers: ['@astrojs/renderer-vue'],
  integrations: [vue()],
  vite: {
    css: {
      postcss: {
        plugins: [require('postcss-nesting')],
      },
    },
    resolve: {
      alias: {
        '@/': path.resolve('./src'),
      },
    },
  },
});
