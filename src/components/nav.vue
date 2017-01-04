<template>
<div id="cp-nav" class="nav">
  <ul>
    <li v-for="item of navList" :class="{'active': item.path === currentActivePath}" @click="$router.push(item.path)">
      <a>{{item.text}}</a>
    </li>
  </ul>
</div>
</template>

<script>

export default {
  name: 'nav',
  data () {
      return {
        navList: [
          {path: '/index', text: 'index'},
          {path: '/blog', text: 'blog'},
          {path: '/photo', text: 'photo'},
          {path: '/about', text: 'about'},
          {path: '/contact', text: 'contact'},
        ]
      }
  },
  props: {},
  methods: {},
  watch: {},
  route: {
  },
  computed: {
    currentActivePath() {
      return `/${this.$route.path.split('/')[1]}`
    }
  },
  created () {},
  components: {},
  filters: {},
  ready () {},
  beforeDestroy () {}
}
</script>

<style lang="sass" scoped>
#cp-nav
  ul
    border: 1px solid #ccc
    border-bottom: none
    li
      border-bottom: 1px solid #ccc
      text-align: center
      cursor: pointer
      &:hover, &.active
        background-color: #be0000
        & > a
          color: #000
          font-style: italic
          position: relative
          padding-right: 15px
          &:after
            opacity: 1
            right: 0
      a
        display: inline-block
        line-height: 36px
        text-align: center
        color: white
        text-decoration: none
        text-transform: capitalize
        font-weight: bolder
        transition: all .3s linear
        &:after
          content: '\00bb'
          position: absolute
          opacity: 0
          top: 0
          right: -20px
          transition: 0.5s
          color: black
</style>
