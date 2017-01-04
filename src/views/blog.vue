<template>
  <div id="cp-blog">
    <ul class="blog-list">
      <li v-for="item of 10">
        <div class="title">Title is here {{item}}</div>
        <p class="content">I am the content {{item}} I am the contentI am the contentI am the contentI am the content</p>
        <div class="bottom">
          <span class="date">
            <i>Alex.Q</i> posted at 2017-1-2
          </span>
          <b></b>
          <router-link :to="'/blog/' + item">View</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

  name: 'blog',
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
  ul.blog-list
    li
      height: 180px
      margin-bottom: 15px
      display: flex
      flex-direction: column
      border: 1px solid #ccc
      .title
        padding-left: 10px
        line-height: 30px
      .content
        padding: 10px
        flex: 1
        text-indent: 2em
      .bottom
        display: flex
        line-height: 30px
        border-top: 1px solid #ccc
        a, span
          display: inline-block
        b
          flex: 1
        span.date
          padding-left: 15px
          i
            color: black
            background: yellow
        a
          cursor: pointer
          padding: 0 10px
          text-decoration: none
          color: #fff
</style>