import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import routes from './routes.js'

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.config.productionTip = false;

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

const router = new VueRouter({
  routes,
  linkExactActiveClass: 'active'
});

// After a nav link is routed to, hide the nav
router.afterEach(() => {
  store.commit('toggleNav', false);
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
