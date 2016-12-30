import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Blog from '../views/blog.vue'
import Index from '../views/index.vue'

const routes = [
  { path: '/index', component: Index },
  { path: '/blog', component: Blog },
  { path: '*', redirect: '/index' }
]

export default new VueRouter({
  mode: 'history',
  routes
})