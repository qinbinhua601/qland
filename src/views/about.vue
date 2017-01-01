<template>
  <div id="cp-about">
    <p>this is about page</p>
  </div>
</template>

<script>
export default {

  name: 'about',
  data () {
    return {}
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