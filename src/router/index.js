import Vue from 'vue';
import Router from 'vue-router';

// lazy load router
const Home = () => import('../views/index/index.vue');
const Page1 = () => import('../views/page1/page1.vue');


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/page1',
      name: 'page1',
      component: Page1,
    }
  ]
});