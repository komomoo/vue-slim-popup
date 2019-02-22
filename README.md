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
| forceRenderOnShow | 显示的时候是否重新渲染 | Boolean | false |
| maskTransition | 遮罩动画 | String | slim-fade |
| popupTransition | 弹窗动画，内置 'slim-scale', 'slim-zoom', 'slim-fade-in-bottom', 'slim-slide-in-bottom' | String | slim-scale |
| maskClass | 遮罩的样式类 | Array | null |
| popupClass | 弹窗的样式类 | Array | null |
| maskStyle | 遮罩的样式 | Object | null |
| popupStyle | 弹窗的样式 | Object | null |
| popupPosition | 弹窗的位置，可选 'center', 'top', 'bottom' | String | center |
| preventMaskTouchmove | 阻止遮罩 touchmove 事件，阻止移动端滚动穿透 | Boolean | true |
| preventPopupTouchmove | 阻止弹窗 touchmove 事件，阻止移动端滚动穿透（同时会导致弹窗区域无法滚动） | Boolean | true |
| preventBodyScroll | 阻止 body 滚动，以间接的阻止滚动穿透（不会影响弹窗区域滚动）。开启此选项，关闭 preventPopupTouchmove，可达到弹窗区域可滚动，同时阻止滚动穿透的效果 | Boolean | false |

<br>
<br>
如果它对你有所帮助，可以点一下 **Star** ~ 😉😘

## 📝 更新日志

### v1.3.2

* 增加 props forceRenderOnShow

### v1.3.0

* 更好的滚动穿透控制。增加 props preventMaskTouchmove & preventPopupTouchmove & preventBodyScroll

### v1.2.0

* props popupClass & maskClass 类型由 String 变为 Array

### v1.1.0

* 移除 slim-radius 动画

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present, momoko
