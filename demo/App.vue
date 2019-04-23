<template>
  <div id="app">
    <h1>中间弹出</h1>

    <div class="btn-box">
      <button @click="centerShow = true"> Scale </button>
      <button @click="centerShow2 = true"> Zoom </button>
    </div>

    <SlimPopup
      :show.sync="centerShow"
      :popup-class="['popup']">
      <h2 style="color: #6D7A80;">这里是一个插槽，可以放置任何元素</h2>
      <button class="close-btn" @click="centerShow = false">X</button>
    </SlimPopup>
    <SlimPopup
      :show.sync="centerShow2"
      popup-transition="slim-zoom-center"
      :popup-class="['popup']">
      <h2 style="color: #6D7A80;">这里是一个插槽，可以放置任何元素</h2>
      <button class="close-btn" @click="centerShow2 = false">X</button>
    </SlimPopup>

    <h1>弹出位置</h1>

    <div class="btn-box">
      <button @click="()=>{position = 'top'; positionShow = true}"> Top </button>
      <button @click="()=>{position = 'bottom'; positionShow = true}"> Bottom </button>
      <button @click="()=>{position = 'left'; positionShow = true}"> Left </button>
      <button @click="()=>{position = 'right'; positionShow = true}"> Right </button>
    </div>

    <SlimPopup
      :show.sync="positionShow"
      :popup-class="['popup']"
      :popup-position="position">
      <h2 style="color: #6D7A80;">这里是一个插槽，可以放置任何元素</h2>
      <button class="close-btn" @click="positionShow = false">X</button>
    </SlimPopup>

    <h1>开启阻止 body 滚动</h1>

    <div class="btn-box">
      <button class="open-btn" @click="scrollShow = true">Click Me</button>
    </div>

    <SlimPopup
      :show.sync="scrollShow"
      :prevent-popup-touchmove="false"
      :prevent-body-scroll="true"
      :popup-class="['popup scroll']">
      <h2 style="color: #6D7A80;">滚动元素</h2>
      <h2 style="color: #6D7A80;">滚动元素</h2>
      <h2 style="color: #6D7A80;">滚动元素</h2>
      <h2 style="color: #6D7A80;">滚动元素</h2>
      <h2 style="color: #6D7A80;">滚动元素</h2>
      <h2 style="color: #6D7A80;">滚动元素</h2>
      <h2 style="color: #6D7A80;">滚动元素</h2>
      <h2 style="color: #6D7A80;">滚动元素</h2>
      <button class="close-btn" @click="scrollShow = false">X</button>
    </SlimPopup>
  </div>
</template>

<script>
import SlimPopup from '../src'

export default {
  name: 'App',
  components: {
    SlimPopup,
  },
  data () {
    return {
      centerShow: false,
      centerShow2: false,
      positionShow: false,
      position: 'top',
      scrollShow: false,
    }
  },
}
</script>

<style lang="stylus">
$headerHeight = 44px
$baseColor = #6A9FB5
$bgColor = #FAFAFA
* {
  padding 0
  margin 0
  border none
}
html, body {
  width 100%
  height 100%
  overflow hidden
}
#app {
  width 100%
  height 100%
  overflow hidden
  overflow-y scroll
  box-sizing border-box

  > h1 {
    font-size 24px
    padding 0 15px
    padding-top 40px
    padding-bottom 20px
    color #6D7A80
  }

  .popup {
    width 80%
    height 200px
    border-radius 16px
    text-align center
    background #fff
    display flex
    align-items center
    flex-direction column
    justify-content space-around

    &.scroll {
      overflow-y scroll
      -webkit-overflow-scrolling touch
    }

    .close-btn {
      font-size 20px
      font-weight 500
      color $baseColor
      background-color $bgColor
      text-align center
      width 50px
      height 50px
      border-radius 4px
    }
  }

  .btn-box {
    display flex
    flex-wrap wrap
    justify-content space-around
    padding 0 20px

    > button {
      display block
      width 140px
      height 80px
      font-size 20px
      font-weight 500
      color $baseColor
      background-color $bgColor
      border 1px solid $borderColor
      margin-bottom 20px
    }
  }
}
</style>
