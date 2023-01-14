import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        productReview: resolve(
          __dirname,
          'product-preview-card-component-main/index.html'
        ),
        qrCode: resolve(__dirname, 'qr-code-component-main/index.html'),
      },
    },
  },
});
