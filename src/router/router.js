import { createRouter, createWebHistory } from 'vue-router'
import Init from '../view/Init.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Init
    }
  ]
})

export default router