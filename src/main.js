import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes.js'

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
    routes, 
    mode: 'history',
    linkExactActiveClass: 'active'
  });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
