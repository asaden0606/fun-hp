import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {path: '/',component:()=> import('@/pages/front/front.vue')},
  {path: '/past',component:()=> import('@/pages/past/past.vue')},
  {path: '/contact',component:()=> import('@/pages/contact/contact.vue')},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
