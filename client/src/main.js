// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.css';
import 'toastr/build/toastr.min.css';
import 'font-awesome/css/font-awesome.css';
import Vue from 'vue';
import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate';
window.$ = window.jQuery = require('jquery'); // eslint-disable-line
require('bootstrap');
require('eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js');
require('eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css');
const toastr = require('toastr');

import store from './vuex/store';
import router from './router';
import App from './App';
import auth from './auth';
import { API_HOST } from './api/urls';

const paltformBrowse = require('../src/utils/platform-browser').default;
window.$('body').addClass(paltformBrowse);


Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VeeValidate);
Vue.prototype.$toastr = toastr;

Vue.http.headers.common['Content-Type'] = 'application/json';
Vue.http.options.root = API_HOST;


Vue.http.interceptors.push((request, next) => {
  request.headers.set('access-token', auth.getAccessToken().AccessToken);
  
  next((response) => {
    if (response.status === 401 && router.currentRoute.name !== 'login') {
      logout();
    } else if (response.status <= 0 && !window.navigator.onLine) {
      toastr.warning('Sorry! No internet connection.');
    } else if (response.status <= 0) {
      toastr.warning('Sorry! There is some server issue. Please try after some time.');
    }
  });
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App,
  },
});
