import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/page/Homeview.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { path: '/', redirect: '/home' },
    { path: '/search', redirect: '/search/cpm' },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/page/Homeview.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/page/Aboutview.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/page/Searchview.vue'),
    },
    {
      path: '/search/cpm',
      name: 'search_cpm',
      component: () => import('../views/search/SCcpm.vue')
    },
    {
      path: '/search/mm',
      name: 'search_mm',
      component: () => import('../views/search/SCmm.vue')
    },
    {
      path: '/search/md',
      name: 'search_md',
      component: () => import('../views/search/SCmd.vue')
    },
    {
      path: '/search/cc',
      name: 'search_cc',
      component: () => import('../views/search/SCcc.vue')
    },
    {
      path: '/search/t',
      name: 'search_t',
      component: () => import('../views/search/SCt.vue')
    },
    { path: '/search', redirect: '/search/cpm' },
    {
      path: '/details',
      name: 'details',
      component: () => import('../views/page/Detailsview.vue')
    },
    {
      path: '/search/herb/details/:id',
      name: 'details_of_mm',
      component: () => import('../views/details/DTmm.vue')
    },
    {
      path: `/search/disease/details/:id`,
      name: 'details_of_md',
      component: () => import('../views/details/DTmd.vue')
    },
    {
      path: `/search/prescription/details/:id`,
      name: 'details_of_cpm',
      component: () => import('../views/details/DTcpm.vue')
    },
    {

      path: `/search/compound/details/:id`,
      name: 'details_of_cc',
      component: () => import('../views/details/DTcc.vue')
    },
    {
      path: `/search/target/details/:id`,
      name: 'details_of_t',
      component: () => import('../views/details/DTt.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('../views/page/Helpview.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/page/Aboutview.vue')
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('../views/page/Downloadview.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/page/Contactview.vue')
    }
  ]
})

export default router
