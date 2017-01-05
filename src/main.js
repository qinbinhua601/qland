import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import _ from 'lodash'
import iSlider from 'islider.js'

// 引入 ECharts 主模块
let echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/line')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

if(window !== 'undefined') {
  window.echarts = echarts
  window.iSlider = iSlider
}

const app =new Vue({
  el: '#app',
  render: h => h(App),
  router
})
