import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/contador',
      name: 'contador',
      component: () => import('../modules/contador/components/contador.vue'),
    },
    {
      path: '/lista-de-tareas',
      name: 'ListaDetareas',
      component: () => import('../modules/ListaDeTareas/components/ListaDeTarea.vue'),
    },
    {
      path: '/registrar',
      name: 'registrar',
      component: () => import('../modules/registro/views/registrarView.vue'),
    }
  ],
})

export default router
