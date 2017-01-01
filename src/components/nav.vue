<template>
<div id="cp-nav" class="nav">
  <ul>
    <li v-for="item of navList" :class="{'active': item.path === currentActivePath}">
      <router-link :to="item.path">{{item.text}}</router-link>
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
      return this.$route.path
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
      a
        display: block
        height: 36px
        line-height: 36px
        text-align: center
        color: white
        text-decoration: none
        text-transform: capitalize
        font-weight: bolder
        transition: all .3s linear
        &:hover
          background-color: #be0000
          color: #000
          font-style: italic
</style>
