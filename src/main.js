import Vue from 'vue'
import VueRouter from 'vue-router'
import Lightbox from 'vue-easy-lightbox'
import App from './App.vue'
import routes from './routes.js'
import webpack from 'webpack';

Vue.use(VueRouter);
Vue.config.productionTip = false;

Vue.use(Lightbox);

Vue.use(webpack);

const router = new VueRouter({
    routes, 
    mode: 'history',
    linkExactActiveClass: 'active'
  });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
