import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import startProc from "./lib/startProc";
startProc.start();

const app =createApp(App);
app.use(router);
app.mount('#app');
