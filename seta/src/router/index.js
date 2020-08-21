import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Acceso',
    name: 'Acceso',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "acceso" */ '../views/Acceso.vue')
  },
  {
    path: '/Registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "registro" */ '../views/Registro.vue')
  },
  {
    path: '/Usuario',
    name: 'Usuario',
    component: () => import(/* webpackChunkName: "usuario" */ '../views/Usuario.vue')
  },
  {
    path: '/Ficha',
    name: 'Ficha',
    component: () => import(/* webpackChunkName: "usuario" */ '../views/Ficha.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
