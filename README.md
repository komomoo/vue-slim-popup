# vue-slim-popup

> 开箱即用的 vue 移动端弹窗组件

## 🐠 示例&文档

[Demo](https://wannaxiao.github.io/vue-slim-popup/demo/)

[Demo 示例代码](https://github.com/wannaxiao/vue-slim-popup/blob/master/src/App.vue)

## 🚀 快速开始

1.  安装 vue-slim-popup

```js
// 使用yarn：
yarn add vue-slim-popup
// 或使用npm：
npm i -S vue-slim-popup
```

2.  引入 vue-slim-popup

- 插件形式全局引入

```js
// 入口文件 main.js 中
import SlimPopup from 'vue-slim-popup'
Vue.use(SlimPopup)
```

- 组件形式引入

```js
// *.vue 中
import SlimPopup from 'vue-slim-popup'
export default {
  /* ... */
  components: {
    SlimPopup,
  },
  /* ... */
}
```

3.  使用它，请参考[Demo 示例代码](https://github.com/wannaxiao/vue-slim-popup/blob/master/src/App.vue)
```html
  <SlimPopup :show.sync="show">
    <!-- 这里是一个插槽，可以放置任何元素 -->
  </SlimPopup>
```

## 🔌 API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | .sync 是否显示 | Boolean | false |
| hideOnMaskClick | 点击遮罩是否关闭弹窗 | Boolean | false |
| maskTransition | 遮罩动画 | String | slim-fade |
| popupTransition | 弹窗动画，内置 'slim-scale', 'slim-zoom', 'slim-radius', 'slim-fade-in-bottom', 'slim-slide-in-bottom' | String | slim-scale |
| maskClass | 遮罩的样式类 | String | null |
| popupClass | 弹窗的样式类 | String | null |
| maskStyle | 遮罩的样式 | Object | null |
| popupStyle | 弹窗的样式 | Object | null |
| popupPosition | 弹窗的位置，可选 'center', 'top', 'bottom' | String | center |

<br>
<br>
如果它对你有所帮助，可以点一下 star ～ 😊

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present, momoko
