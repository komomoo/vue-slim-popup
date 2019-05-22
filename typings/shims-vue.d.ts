/**
 * TypeScript 并不支持 Vue 文件，
 * 该文件告诉 ts 导入.vue 文件都按VueConstructor<Vue>处理，
 * 因此导入 vue 文件必须写.vue 后缀
 */

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
