<template>
  <div id="app">
    <button @click="dialogShow">Click Me</button>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>
    <p>2323233</p>

    <SlimDialog :show.sync="show" :hideOnMaskClick="true" :dialogClass="'dialog'">
      <div>23333</div>
    </SlimDialog>
  </div>
</template>

<script>
import SlimDialog from './package'

export default {
  name: 'App',
  components: {
    SlimDialog,
  },
  data () {
    return {
      show: false,
    }
  },
  methods: {
    dialogShow () {
      this.show = true
    },
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

  > button {
    width 200px
    height 100px
    font-size 24px
    color $baseColor
    background-color $bgColor
  }
}
</style>
