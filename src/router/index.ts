import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {path: '/',component:()=> import('@/pages/front/front.vue')},
  {path: '/past',component:()=> import('@/pages/past/past.vue')},
  {path: '/contact',component:()=> import('@/pages/contact/contact.vue')},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
