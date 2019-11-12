import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Lightbox from 'vue-easy-lightbox'
import App from './App.vue'
import routes from './routes.js'

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Lightbox);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes, 
  mode: 'history',
  linkExactActiveClass: 'active'
});

const store = new Vuex.Store({
  state: {
    showNav: false
  },
  mutations: {
    toggleNav(state, showNav) {
      state.showNav = showNav
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
