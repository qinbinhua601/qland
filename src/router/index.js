import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from '../views/index.vue'
import Blog from '../views/blog.vue'
import Detail from '../views/detail.vue'
import Photo from '../views/photo.vue'
import About from '../views/about.vue'
import Contact from '../views/contact.vue'

const routes = [
  { path: '/index', component: Index },
  { path: '/blog', component: Blog},
  { path: '/blog/:id', component: Detail },
  { path: '/photo', component: Photo },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '*', redirect: '/index' }
]

export default new VueRouter({
  mode: 'history',
  routes
})