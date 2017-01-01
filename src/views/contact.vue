<template>
  <div id="cp-contact">
    <p>this is contact page</p>
  </div>
</template>

<script>
export default {

  name: 'contact',
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