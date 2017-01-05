<template>
  <div id="cp-photo">
    <ul class="photo-list">
      <li v-for="(item, index) in photoList" @click="previewByIndex(index)">
        <img :src="'../src/' + item.small">
      </li>
    </ul>
    <div id="frame" style="display: block;">
      <a class="close" href="#">x</a>
      <img src="http://www.alexq.net/images/port/41950051265319018a.gif">
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
      slider: null,
      currentIndex: 0
    }
  },
  methods: {
    previewByIndex(index) {
      if(!this.slider) {
        this.initSlider()
      }
      this.showLayer = true
      this.slider.slideTo(index)
    },
    initSlider() {
      this.slider = new iSlider(document.getElementById('iSlider-wrapper'), PHOTO_LIST.map((e) => {return {content: '../src/' + e.big}}));
    }
  },
  computed: {
    currentPreviewItem() {
      return this.photoList[0]
    }
  },
  mounted() {}
}
</script>

<style lang="sass" scoped>
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
    #iSlider-wrapper
      background-color: #fff
      width: 600px
      height: 400px
      padding: 30px
      border-radius: 20px
</style>