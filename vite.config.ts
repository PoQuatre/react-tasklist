import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import compression from 'vite-plugin-compression';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        assetFileNames: (asset) => {
          let ext = asset.name?.split('.').at(1);
          if (ext && /png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            ext = 'img';
          }
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          return `assets/${ext}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
  plugins: [
    react(),
    tsconfigPaths(),
    compression(),
    compression({
      algorithm: 'brotliCompress',
      ext: 'br',
    }),
  ],
});
