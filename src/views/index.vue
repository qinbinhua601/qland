<template>
  <div id="cp-index">
    <div id="chart"></div>
  </div>
</template>

<script>

export default {
  name: 'index',
  data () {
      return {}
  },
  methods: {},
  watch: {},
  route: {},
  computed: {},
  created () {},
  components: {},
  filters: {},
  mounted () {
    let data = JSON.parse('[{"datestat":"2016-12-30","vnumberstat":"6"},{"datestat":"2016-12-31","vnumberstat":"4"},{"datestat":"2017-01-01","vnumberstat":"4"},{"datestat":"2017-01-02","vnumberstat":"7"},{"datestat":"2017-01-03","vnumberstat":"5"},{"datestat":"2017-01-04","vnumberstat":"5"},{"datestat":"2017-01-05","vnumberstat":"7"}]')
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById('chart'))
    // 绘制图表
    myChart.setOption({
        backgroundColor: '#fff',
        title: {
          text: '近一周访问'
        },
        grid: {
          backgroundColor: 'rgb(250, 249, 242)',
          show: true,
          right: '5%',
          left: '5%',
          top: 50,
          bottom: 50
        },
        tooltip: {},
        xAxis: {
          data: data.map((e, index)=> e.datestat.substr(5)),
          axisLabel: {
            rotate: 45,
          },
          splitLine: {
            show: true
          }
        },
        yAxis: {
          max: Math.ceil(_.max(data.map((e)=> +e.vnumberstat)) / 5) * 5,
          splitLine: {
            show: true
          }
        },
        series: [{
            name: '近一周访问',
            type: 'line',
            data: data.map((e, index)=> +e.vnumberstat),
            lineStyle: {
              normal: {
                color: 'rgb(255, 114, 0)',
                width: 6
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb(255, 159, 59)',
                borderWidth: 1,
                borderColor: 'rgb(255, 114, 0)'
              }
            },
            symbol: 'circle',
            symbolSize: 13
        }]
    })
  },
  beforeDestroy () {}
}
</script>

<style lang="sass" scoped>
#cp-index.view
  padding: 0
  #chart
    height: 320px
</style>