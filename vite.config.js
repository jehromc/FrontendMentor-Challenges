
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(
          __dirname,
          'product-preview-card-component-main/index.html'
        ),
      },
    },
  },
});