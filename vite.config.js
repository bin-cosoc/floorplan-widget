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
        palma: resolve(__dirname, 'pages/palma.html'), // New entry point
        // edge: resolve(__dirname, 'src/edge.js') // New entry point
      },
      output: {
        entryFileNames: `[name].js`,
      }
    }
  }
});