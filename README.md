# vue-slim-dialog

> 开箱即用的 vue 移动端弹窗组件

## 🐠 示例&文档

[Demo](https://wannaxiao.github.io/vue-slim-dialog/demo/)

[Demo 示例代码](https://github.com/wannaxiao/vue-slim-dialog/blob/master/src/App.vue)

## 🚀 快速开始

1.  安装 vue-slim-dialog

```js
// 使用yarn：
yarn add vue-slim-dialog
// 或使用npm：
npm i -S vue-slim-dialog
```

2.  引入 vue-slim-dialog

- 插件形式全局引入

```js
// 入口文件 main.js 中
import SlimDialog from 'vue-slim-dialog'
Vue.use(SlimDialog)
```

- 组件形式引入

```js
// *.vue 中
import SlimDialog from 'vue-slim-dialog'
export default {
  /* ... */
  components: {
    SlimDialog,
  },
  /* ... */
}
```

3.  使用它，请参考[Demo 示例代码](https://github.com/wannaxiao/vue-slim-dialog/blob/master/src/App.vue)

## 🔌 API

### Props

| 参数             | 说明                                                    | 类型    | 默认值     |
| ---------------- | ------------------------------------------------------- | ------- | ---------- |
| show             | .sync 是否显示                                          | Boolean | false      |
| hideOnMaskClick  | 点击遮罩是否关闭弹窗                                    | Boolean | false      |
| maskTransition   | 遮罩动画                                                | String  | slim-fade  |
| dialogTransition | 弹窗动画，内置 'slim-scale', 'slim-zoom', 'slim-radius' | String  | slim-scale |
| maskClass        | 遮罩的样式类                                            | String  | null       |
| dialogClass      | 弹窗的样式类                                            | String  | null       |

<br>
<br>
如果它对你有所帮助，可以点一下 star ～ 😊
