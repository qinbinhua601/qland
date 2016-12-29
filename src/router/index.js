import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Foo from '../components/foo.vue'

const routes = [
  {
    path: '/foo',
    component: Foo
  },
]

export default new VueRouter({
  routes
})