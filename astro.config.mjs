import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  projectRoot: "./",
  public: "./public/",
  dist: "./dist/",
  src: "./src/",
  renderers: ['@astrojs/renderer-vue'],
  integrations: [vue()]
});