<template>
<div id="cp-photo">
  <ul class="photo-list">
    <li v-for="(item, index) in photoList" @click="previewByIndex(index)">
      <img :src="'../src/' + item.small">
    </li>
  </ul>
  <div class="layer" v-show="showLayer" @click="showLayer = false">
    <div class="frame" @click.stop="">
      <div class="img">
        <div class="left-arrow" @click="decrement"></div>
        <img :src="'../src/' + currentPreviewItem.big">
        <div class="right-arrow" @click="increment"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { PHOTO_LIST } from '../config/'

const getPhotoList = () => PHOTO_LIST
export default {
  name: 'photo',
  data () {
    return {
      photoList: getPhotoList(),
      showLayer: false,
      currentIndex: 0
    }
  },
  methods: {
    previewByIndex(index) {
      this.currentIndex = index
      this.showLayer = true
    },
    increment() {
      this.currentIndex++
      this.currentIndex = this.currentIndex % this.photoListLength
    },
    decrement() {
      this.currentIndex--
      this.currentIndex = this.currentIndex < 0 ? this.photoListLength - 1 : this.currentIndex
    }
  },
  computed: {
    currentPreviewItem() {
      return this.photoList[this.currentIndex]
    },
    photoListLength() {
      return this.photoList.length
    }
  },
  mounted() {
    document.body.addEventListener('keyup', ({keyCode}) => {
      switch(keyCode) {
        case 39:
          console.log('right')
          this.increment()
          break
        case 37:
          console.log('left')
          this.decrement()
          break
        case 27:
          console.log('ESC')
          this.showLayer = false
          break
        default:
          console.log('default')
          break

      }
    })
  }
}
</script>

<style lang="sass" scoped>
@import "../sass/base/config"
@import "../sass/utils/function"

#cp-photo.view
  padding: 20px 10px
  ul.photo-list
    overflow: hidden
    li
      float: left
      width: 150px
      height: 150px
      margin-right: 10px
      margin-bottom: 10px
      cursor: pointer
      img
        width: 100%
        height: 100%
  .layer
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    background-color: rgba(0, 0, 0, .5)
    display: flex
    align-items: center
    justify-content: center
    .frame
      background-color: #fff
      width: 600px
      height: 400px
      padding: 30px 37.5px
      border-radius: 20px
      .img
        width: 100%
        height: 100%
        position: relative
        .left-arrow, .right-arrow
          &:hover
            background:
              color: rgb(61, 61, 61)
              image: linear-gradient(to bottom,rgb(78, 78, 78),rgb(71, 71, 71))
            background:
              image: u('src/images/arrow_right.png')
              repeat: no-repeat
              position: center
              size: r(75 / 2) r(127 / 2)
          cursor: pointer
          position: absolute
          content: ''
          width: r(75)
          height: r(127)
          right: 0
          top: 50%
          transform: translate(0%, -50%)
          background:
            color: rgb(69, 69, 69)
            image: linear-gradient(to bottom,rgb(62, 62, 62),rgb(51, 51, 51))
          background:
            image: u('src/images/arrow_right.png')
            repeat: no-repeat
            position: center
            size: r(75 / 2) r(127 / 2)
        .right-arrow
          right: 0
          transform: translate(0%, -50%)
        .left-arrow
          left: 0
          transform: translate(0%, -50%) rotate(180deg)
        img
          width: 100%
          height: 100%
</style>