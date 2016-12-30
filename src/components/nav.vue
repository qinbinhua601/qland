<template>
<div id="cp-nav">
  <ul>
    <li v-for="item of list" :class="{'active': item.path === currentActivePath}">
      <router-link :to="item.path">{{item.text}}</router-link>
    </li>
  </ul>
</div>
</template>

<script>

export default {
  name: 'nav',
  data () {
      return {}
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  },
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
    list-style-type: none
    overflow: hidden
    li
      float: left
      padding-right: 2px
      height: 30px
      a
        color: rgb(0, 0, 0)
        font-family: arial
        display: inline-block
        width: 120px
        font-weight: bold
        text-align: center
        padding: 2px
        text-decoration: none
        text-transform: uppercase
        height: 30px
        line-height: 30px
        background-color: rgb(190, 190, 190)
        &:hover
          background-color: rgb(190, 0, 0)
      &.active
        a
          background-color: rgb(190, 0, 0)
</style>
