import { defineConfig } from 'vite';
import vinext from 'vinext';

export default defineConfig({
  publicDir: '.sites-static',
  plugins: [vinext()]
});
