import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ChartComponent from 'fun-chart';
import "fun-chart/dist/fun-chart.css";


createApp(App).use(router).component("chart-component", ChartComponent).mount('#app')
