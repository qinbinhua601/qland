<template>
  <div id="cp-blog">
    <a @click="back">{{msg}}</a>
  </div>
</template>

<script>
export default {

  name: 'blog',
  data () {
    return {
      msg: 'back to last page'
    }
  },
  methods: {
    back() {
      window.history.back()
    }
  }
}
</script>

<style lang="sass" scoped>
  a
    color: red
    text-decoration: underline
    cursor: pointer

</style>