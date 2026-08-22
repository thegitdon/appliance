import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/tipos-servicios',
      name: 'tipos-servicios',
      component: () => import('../views/ServiceTypeView.vue'),
    },
  ],
})

export default router
