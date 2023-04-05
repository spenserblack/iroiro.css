import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const port = process.env.CODESPACES == 'true' ? 3000 : void 0;

export default defineConfig({
  root: 'preview',
  server: {
    port,
  },
  plugins: [vue()],
});
