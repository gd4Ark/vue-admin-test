import Vue from 'vue'
import VueRouter from 'vue-router'

import { fileListToArray } from '@/common/utils/readFile'

import navSort from './navSort'

const routers = fileListToArray(
  require.context('./modules/', false, /\.js$/),
  navSort
)
const routerConfig = {
  // mode: process.env.NODE_ENV === 'development' ? 'history' : 'hash',
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index',
      hidden: true
    },
    {
      path: '/index',
      // redirect: '/roleHome',
      redirect: '/users',
      hidden: true
    },
    ...routers
  ]
}

Vue.use(VueRouter)

const router = new VueRouter(routerConfig)

export default router
