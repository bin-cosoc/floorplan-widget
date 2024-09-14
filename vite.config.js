import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const BASE = '/floorplan-widget/';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: BASE,
})
