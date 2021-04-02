import { createApp } from 'vue';
import App from './App.vue';
import router from './route';
import './scss/main.scss';

createApp(App).use(router).mount('#app');
