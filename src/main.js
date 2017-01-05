import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import _ from 'lodash'
import iSlider from 'islider.js'

let echarts = require('./plugins/echarts.common.min.js')

if(window !== 'undefined') {
  window.echarts = echarts
  window.iSlider = iSlider
}

const app =new Vue({
  el: '#app',
  render: h => h(App),
  router
})
