<template>
  <div id="cp-contact">
    <a class="email" href= "mailto:qinbinhua601@hotmail.com">Contact Me</a>
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
  a.email
    color: #fff
    cursor: pointer
</style>