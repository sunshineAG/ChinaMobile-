// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import Qs from "qs"
import 'vant/lib/index.css';
// import '@/theme/globalIndex.css'
import "amfe-flexible/index.js"

import { Lazyload } from 'vant';
Vue.use(Lazyload);
Vue.use(Lazyload, {
    lazyComponent: true,
});
Vue.prototype.$axios = axios

Vue.config.productionTip = false

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.transformRequest = [function(data) {
//     return Qs.stringify(data)
// }];
// axios.interceptors.response.use(
//     response => {
    
//     },
//     error => {
//         if (error.response) {
//             switch (error.response.status) {
//                 case 400:
//                 case 401:
//                 case 404:
//                 case 500:
//                     break
//             }
//         }
//         if(error.response) {
//             return Promise.reject(error.response.data)   // 返回接口返回的错误信息
//         }
//     }
// );


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
