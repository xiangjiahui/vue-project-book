import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/views/Login/Login.vue';
import { Toast } from 'vant';

// 解决路由守卫跳转时,页面的DOM未渲染完成会报错的问题,重写router的push方法
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject);
  }
  return originalPush.call(this, location,() => {},() => {});
}

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function push (location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalReplace.call(this, location, onResolve, onReject);
  }
  return originalReplace.call(this, location,() => {},() => {});
}


Vue.use(VueRouter)


const routes = [
  // { path: '/', redirect: '/home'},
  { path: '/home', name: 'home', component: () => import('@/views/Home/Home.vue'),
    meta: { isRecord: true, top: 0 }, },
  { path: '/search', name: 'search', component: () => import('@/views/Search/Sear.vue') },
  { path: '/user', name: 'user', component: () => import('@/views/User/User.vue') },
  { path: '/list/:id', name: 'bookList', component: () => import ('@/views/List/BookList.vue'), props: true },
  { path: '/login', name: 'login', component: Login },
  {path: '/register', name: 'register', component: () => import('@/views/Register/Register.vue') }
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

//导航守卫
// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('token');
//   if (to.path !== '/login') {
//     if (!token) {
//       Toast.fail({
//         message: '未登录',
//         duration: 1500,
//         onClose: () => {
//           next('/login');
//         }
//       });
//     }
//   }
//   next();
// });

export default router
