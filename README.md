# vue-slim-dialog

> 开箱即用的/渐进式的 vue 移动端滚动组件/插件

## ✨ 特性

* **极简使用**
  * 零配置/渐进式配置
  * 自动刷新滚动高度
* **更优性能**
  * 使用 transform 替代 position ，下拉刷新不再掉帧
* **更好体验**
  * 滚动内容小于滚动视口时，也可以滚动/回弹/下拉刷新/上拉加载
  * 多次下拉刷新节流
  * 适配 flexible
  * 多处细节改进

## 🐠 示例&文档

[Demo](https://wannaxiao.github.io/vue-slim-better-scroll/page/)

[Demo 示例代码](https://github.com/wannaxiao/vue-slim-better-scroll/blob/master/src/App.vue)

[查看文档](https://wannaxiao.github.io/vue-slim-better-scroll/docs/dist/)

## 🚀 快速开始

1.  安装 vue-slim-better-scroll

```js
// 使用yarn：
yarn add vue-slim-better-scroll
// 或使用npm：
npm i -S vue-slim-better-scroll
```

2.  引入 vue-slim-better-scroll

* 插件形式全局引入

```js
// 入口文件 main.js 中
import Scroll from 'vue-slim-better-scroll'
Vue.use(Scroll)
```

* 组件形式引入

```js
// *.vue 中
import Scroll from 'vue-slim-better-scroll'
export default {
  /* ... */
  components: {
    Scroll,
  },
  /* ... */
}
```

3.  使用它，请参考[Demo 示例代码](https://github.com/wannaxiao/vue-slim-better-scroll/blob/master/src/App.vue)


如果它对你有所帮助，可以点一下 star ～ 😊
