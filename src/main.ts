import { createApp } from 'vue';
import { createGtm } from '@gtm-support/vue-gtm';
import App from './App.vue';
import router from './route';
import './scss/main.scss';

createApp(App)
  .use(router)
  .use(
    createGtm({
      id: 'GTM-W65BSBG',
      enabled: import.meta.env.PROD,
    })
  )
  .mount('#app');
