import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ChartComponent from 'fun-chart';
import "fun-chart/dist/fun-chart.css";
import VueFinalModal from 'vue-final-modal';




createApp(App).use(router).use(VueFinalModal()).component("chart-component", ChartComponent).mount('#app')
