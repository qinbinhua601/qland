<template>
  <div id="cp-foo">
    <p @click="back">{{msg}}</p>
  </div>
</template>

<script>
export default {

  name: 'foo',
  data () {
    return {
      msg: 'this is foo page'
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
  p
    color: red
</style>