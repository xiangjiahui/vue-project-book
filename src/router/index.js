import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home'},
  { path: '/home', name: 'home', component: () => import('@/views/Home/Home.vue'),
    meta: { isRecord: true, top: 0 } },
  { path: '/search', name: 'search', component: () => import('@/views/Search/Sear.vue') },
  { path: '/user', name: 'user', component: () => import('@/views/User/User.vue') }
]

const router = new VueRouter({
  routes,
  scrollBehavior(to,from,savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }else {
      return { x: 0, y: to.meta.top || 0 }
    }
  }
})

// 导航守卫
// router.beforeEach((to, from, next) => {
//
// });

export default router
