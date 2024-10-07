import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";
// import { loadEnv } from "vite";
// const { BUILD_TYPE } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

export default defineConfig({
  // site: 'ethanokamura.io',
  // base: '/', // 'ethanokamura/',
  output: 'static',
  integrations: [tailwind(), icon()],
});