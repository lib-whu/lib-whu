import Vue from 'vue';
import MpvueRouterPatch from 'mpvue-router-patch';
import App from '@/App';
import store from '@/store';
// import './mockjs';
import './style/index.scss';

Vue.use(MpvueRouterPatch);
Vue.config.productionTip = false;

const app = new Vue({
  mpType: 'app',
  store,
  ...App,
});
app.$mount();
