import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from "path";
import { useCDN } from "./cdn";

const CDN_URL = 'https://lordfitoi.github.io/floorplan-widget'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), useCDN(CDN_URL)],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    minify: false,
    rollupOptions: {
      input: {
        palma: resolve(__dirname, 'pages/palma.html'),
        // edge: resolve(__dirname, 'src/edge.js')
      },
      output: {
        entryFileNames: `[name].js`,
        assetFileNames: (assetInfo) => {
          return assetInfo.name.endsWith('.css')
            ? 'assets/[name][extname]'
            : 'assets/[name]-[hash][extname]';
        },
      }
    }
  }
});