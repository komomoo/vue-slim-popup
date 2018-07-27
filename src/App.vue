<template>
  <div id="app">
    <button v-for="(item, index) in 3" :key="index" class="open-btn" @click="dialogShow(index)">Click Me!</button>

    <SlimDialog :show.sync="show" :dialogTransition="dialogTransition" dialogClass="dialog">
      <h2>这里是一个插槽，可以放置任何元素</h2>
      <button class="close-btn" @click="dialogHide">X</button>
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
      dialogTransition: '',
    }
  },
  created () {
    this.transitionList = ['slim-scale', 'slim-zoom', 'slim-radius']
  },
  methods: {
    // 显示
    dialogShow (index) {
      this.dialogTransition = this.transitionList[index] // 更换动效
      this.show = true
    },
    // 隐藏
    dialogHide () {
      this.show = false
    },
  },
}
</script>

<style lang="stylus">
$headerHeight = 44px;
$baseColor = #6A9FB5;
$bgColor = #FAFAFA;
* {
  padding: 0;
  margin: 0;
  border: none;
}
html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  box-sizing: border-box;

  .dialog {
    width: 80%;
    height: 200px;
    text-align: center;
    background: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
  }

  .open-btn {
    display block;
    width: 200px;
    height: 100px;
    margin 200px auto;
    font-size: 24px;
    color: $baseColor;
    background-color: $bgColor;
  }

  .close-btn {
    font-size: 20px;
    font-weight: 500;
    color: $baseColor;
    background-color: $bgColor;
    text-align: center;
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
}
</style>
