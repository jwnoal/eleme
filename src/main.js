import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';
Vue.use(VueRouter);
const routes = [
{path: '/goods', component: goods},
{path: '/ratings', component: ratings},
{path: '/seller', component: seller}
];
const router = new VueRouter({routes: routes, linkActiveClass: 'active'});
router.push('/goods');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
}).$mount('#app');
