
import Vue from 'vue';
import { router } from './config/router';
import store from '../src/store/store'
import { Dialog } from 'vant';
import './config/rem';
import App from './App.vue';
import VueLazyload from 'vue-lazyload'
import components from './config/components.js';
Vue.use(components);
Vue.use(VueLazyload);
Vue.use(Dialog);

router.beforeEach((to, from, next) => {
     var jwt = localStorage.getItem('jwt');
     var uid = localStorage.getItem('uid');
    if(jwt && uid){
        next()
    }else{
        if(to.meta.type === 'login'){
            next();
        }else{
            next('/login/phone');
        }
    }

});

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
});

