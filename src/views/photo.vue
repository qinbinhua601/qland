<template>
  <div id="cp-photo">
    <p>this is photo page</p>
  </div>
</template>

<script>
export default {

  name: 'photo',
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