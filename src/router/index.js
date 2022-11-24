import Vue from 'vue'
import VueRouter from 'vue-router'
import { getCookie } from "@/utils/global";

Vue.use(VueRouter)

import {
  PROFILE_PATH,
  PROFILE_NAME,
  SIGN_IN_NAME,
  SIGN_IN_PATH,
} from './routes.json'

const routes = [
  {
    path: PROFILE_PATH,
    name: PROFILE_NAME,
    component: () => import('../views/ProfilePage.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: SIGN_IN_PATH,
    name: SIGN_IN_NAME,
    component: () => import('../views/SignIn.vue'),
  },
  {
    path: '*',
    name: 'notFount',
    component: () => import('../views/404.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!getCookie('authToken')) {
      next({ name: SIGN_IN_NAME })
    } else {
      next()
    }
  } else {
    if (to.name === SIGN_IN_NAME && getCookie('authToken')) {
      next({name: PROFILE_NAME})
    } else {
      next()
    }
  }
})

export default router
