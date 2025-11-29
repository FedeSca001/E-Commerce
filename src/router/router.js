import { createRouter, createWebHistory } from 'vue-router'
import Init from '../view/Init.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Init
    },
    {
      path: '/about-us',
      name: 'aboutUs',
      component: () => import('../view/AboutUs.vue')
    },
    {
      path: '/products-list',
      name: 'productsList',
      component: () => import('../view/ProductList.vue')
    },
    {
      path: '/contact-me',
      name: 'contactMe',
      component: () => import('../view/ContactMe.vue')
    }
  ]
})

export default router