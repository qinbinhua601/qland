<style lang="sass" src="./sass/main.sass"></style>
<template>
  <div id="app">
    <nav-bar :list="navList"></nav-bar>
    <router-view class="view"></router-view>
    <footer>
      <p>
        © Copyright  by
        <a href="http://weibo.com/u/1881768060/home">Alex.Q</a>
      </p>
    </footer>
  </div>
</template>
<script>
  import Nav from './components/nav.vue'
  export default {
    name: 'app',
    data() {
      return {
        apple: 'asdfasdf',
        navList: [
          {
            path: '/index',
            text: 'index'
          },
          {
            path: '/blog',
            text: 'blog'
          },
          {
            path: '/label',
            text: 'label'
          },
          {
            path: '/about',
            text: 'about'
          },
          {
            path: '/contact',
            text: 'contact'
          }
        ]
      }
    },
    components: {
      navBar: Nav
    }
  }
</script>
<style lang="sass">
@import "./sass/base/config"
@import "./sass/utils/function"

body
  background-image: u('binding_dark_@2X.png')
#app
  width: 800px
  margin: 0 auto
  footer
    color: rgb(255, 255, 255)
    position: absolute
    bottom: 0
    text-align: center
    width: 700px
    height: 60px
    font-weight: bolder
    margin-top: 20px
    p
      a
        text-decoration: none;
        color: rgb(255, 255, 0);
</style>
