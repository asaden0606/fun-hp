import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ChartComponent from 'fun-chart';
import "fun-chart/dist/fun-chart.css";
import { vfmPlugin } from "vue-final-modal";



createApp(App).use(router)
    .use(vfmPlugin())
    .component("chart-component", ChartComponent).mount('#app')
