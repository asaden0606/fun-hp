import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vue-final-modal/style.css'
//import Chart from 'fun-chart';
//import "fun-chart/dist/fun-chart.css";


createApp(App)
    .use(router)
    //    .use(Chart)
    .mount('#app')

