<template lang="jade">
  <div id="cp-contact">
    <p>Contact me:</p>
    <a class="email" href= "mailto:qinbinhua601@hotmail.com">qinbinhua601@hotmail.com</a>
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
#cp-contact
  p
    padding: 10px 0
  a
    color: #fff
</style>