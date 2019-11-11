import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes.js'
import Lightbox from 'vue-easy-lightbox'

Vue.use(VueRouter);
Vue.config.productionTip = false

Vue.use(Lightbox);

const router = new VueRouter({
    routes, 
    mode: 'history',
    linkExactActiveClass: 'active'
  });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
