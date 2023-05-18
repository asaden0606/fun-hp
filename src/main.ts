import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { install } from 'fun-chart';
import "fun-chart/dist/fun-chart.css";
import { createVfm } from 'vue-final-modal'
const vfm = createVfm()

createApp(App).use(vfm).use(router)
    .use(install).mount('#app')
