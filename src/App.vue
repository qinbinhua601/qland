<style lang="sass" src="./sass/main.sass"></style>
<template>
  <div id="app">
    <div id="logo" @click="$router.push('/')">
      <span>Q</span>
      min Blog
    </div>
    <div class="main">
      <nav-bar></nav-bar>
      <router-view class="view"></router-view>
    </div>
    <copyright></copyright>
  </div>
</template>
<script>
  import Nav from './components/nav.vue'
  import Copyright from './components/copyright.vue'

  export default {
    name: 'app',
    data() {
      return {
        apple: 'asdfasdf'
      }
    },
    components: {
      navBar: Nav,
      copyright: Copyright
    }
  }
</script>
<style lang="sass">
@import "./sass/base/config"
@import "./sass/utils/function"
html, body
  font-family: Microsoft Yahei, BlinkMacSystemFont
  height: auto
  user-select: none
body
  background-image: u('src/images/binding_dark_@2X.png')
  display: flex
  flex-direction: column
  overflow-x: hidden
  &::-webkit-scrollbar
    display: none
#logo
  position: relative
  font-family: arial
  color: #009999
  padding-left: 10px
  font-weight: bold
  height: 70px
  cursor: pointer
  &:after
    content: ''
    position: absolute
    bottom: 0
    left: 0
    width: 100%
    height: 3px
    background-color: #009999
  span
    font-size: 60px
    color: #009999
    font-style: italic
#app
  width: 800px
  height: 100%
  margin: 0 auto
  flex: 1
  display: flex
  flex-direction: column
  .main
    display: flex
    flex: 1
    margin-top: 20px
    .nav
      width: 15%
    .view
      flex: 1
      color: white
      padding: 20px
      border: 1px solid #ccc
</style>
