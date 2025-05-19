import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
 base: '/SASS-Vite-Grocery-Store/',
 resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});