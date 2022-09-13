import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Ejemplo from '../views/Ejemplo.vue'
import Mostrar from '../views/Mostrar.vue'
import Registrar from '../views/Registrar.vue'
import Editar from '../views/Editar.vue'
import MostrarPost from '../views/Post/ListarPost.vue'
import listarPosts from '../views/Posts/ListarPosts.vue'
import EditarPosts from '../views/Posts/EditarPosts.vue'
import NuevoPosts from '../views/Posts/NuevoPosts.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/EditarPosts/:id',
    name: 'EditarPosts',
    component: EditarPosts
  },
  {
    path: '/listarPosts',
    name: 'listarPosts',
    component: listarPosts
  },
  {
    path: '/NuevoPosts',
    name: 'NuevoPosts',
    component: NuevoPosts
  },
  {
    path: '/Ejemplo',
    name: 'Ejemplo',
    component: Ejemplo
  },
  {
    path: '/Editar/:id',
    name: 'Editar',
    component: Editar
  },
  {
    path: '/Mostrar',
    name: 'Mostrar',
    component: Mostrar
  },
  {
    path: '/MostrarPost',
    name: 'MostrarPost',
    component: MostrarPost
  },
  {
    path: '/Registrar',
    name: 'Registrar',
    component: Registrar
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
