import { createApp } from 'vue';
import VueGtag from 'vue-gtag-next';
import App from './App.vue';
import router from './route';
import './scss/main.scss';

createApp(App)
  .use(router)
  .use(VueGtag, {
    property: {
      id: 'UA-153429703-2',
    },
    isEnabled: import.meta.env.PROD,
  })
  .mount('#app');
