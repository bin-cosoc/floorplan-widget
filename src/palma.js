import App from '@/App.vue';
import '@/assets/css/palma.css';
import Data from '@/assets/jsons/palma.json';
import { createPinia } from 'pinia';
import { createApp } from 'vue';

const app = createApp(App);
const pinia = createPinia();
app.config.globalProperties.$floorplan = Data;

app.use(pinia);
app.mount('#app');
