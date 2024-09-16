import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from "path";

const BASE = '/floorplan-widget/';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: BASE,
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        palma: resolve(__dirname, 'src/palma.js') // New entry point
      },
      output: {
        entryFileNames: '[name].js', // Output file name without hash
        chunkFileNames: '[name].js', // Output chunk file name without hash
        assetFileNames: '[name].[ext]' // Output asset file name without hash
      }
    }
  }
});