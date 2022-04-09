import Vue from 'vue';

import router from './router/index.js';
import store from './store/index.js';

import applyPrototypes from '@/helpers/applyPrototypes.js';

import App from '@/App.vue';

Vue.config.productionTip = false;
applyPrototypes(Vue);

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  router,
  store,

  render: function (hyperscript) {
    return hyperscript(App);
  }
}).$mount('#app');
