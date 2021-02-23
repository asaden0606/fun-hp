import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ChartComponent from 'fun-chart';
import "fun-chart/dist/fun-chart.css";

Vue.config.productionTip = false;
Vue.component("chart-component", ChartComponent);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
