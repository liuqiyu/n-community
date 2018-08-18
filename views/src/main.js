import Vue from 'vue';
// import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import './assets/style/css/reset.css';
import './common/element-ui';

// Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
