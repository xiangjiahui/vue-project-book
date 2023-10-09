import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'vant/lib/index.less';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@/assets/init.css';
import { Sticky } from 'vant';
import { Search } from 'vant';
import { Toast } from 'vant';

Vue.use(Sticky);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Search)
Vue.use(Toast)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
