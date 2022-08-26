import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: () => import('./components/Home.vue'),
    },
    {
      path: '/home/login',
      component: () => import('./components/Login.vue'),
    },
    {
      path: '/home/register',
      component: () => import('./components/Register.vue'),
    },
    {
      path: '/home/application',
      component: () => import('./components/Application.vue'),
    },
    {
      path: '/somethingWrong',
      component: () => import('./components/Error.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.path == '/home/application') {
    if (sessionStorage.getItem('token') == 1) {
      next()
    } else {
      ElNotification({
        title: 'NONONO',
        message: '访问图表前需要登陆！',
        type: 'error',
      })
      next('/home/login')
    }
  } else {
    next()
  }
})

export default router
