import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'
import Data from './assets/jsons/palma.json';

const app = createApp(App);
const pinia = createPinia();
app.config.globalProperties.$floorplan = Data;

app.use(pinia);
app.mount('#app');
