import Vue from 'vue'
import VueRouter from 'vue-router'
import Registro from '../views/Registro.vue'
import Mostrar from '../views/Mostrar.vue'
import Editar from '../views/Editar.vue'

import EditarPosts from '../views/Posts/EditarPosts.vue'
import NuevoPosts from '../views/Posts/NuevoPosts.vue'
import ListarPosts from '../views/Posts/ListarPosts.vue'


import logins from '../views/Auth/login.vue'
import registrar from '../views/Auth/registrar.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'logins',
    component:logins
  },
  
  {
    path: '/registrar',
    name: 'registrar',
    component:registrar
  },
  {
    path: '/mostrar',
    name: 'mostrar',
    component:Mostrar
  },
  {
    path: '/editar',
    name: 'editar',
    component:Editar
  },
  {
    path: '/registro',
    name: 'registro',
    component:Registro
  },
  {
    path: '/editarposts',
    name: 'editarposts',
    component:EditarPosts
  },
  {
    path: '/listarposts',
    name: 'listarposts',
    component:ListarPosts
  },
  {
    path: '/nuevoposts',
    name: 'nuevoposts',
    component:NuevoPosts
  },
 
  
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
