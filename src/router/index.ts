import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {path: '/',component:()=> import('@/pages/front.vue')},
  {path: '/past',component:()=> import('@/pages/past.vue')},
  {path: '/contact',component:()=> import('@/pages/contact.vue')},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
