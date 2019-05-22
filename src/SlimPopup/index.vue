/**
 * vue-slim-popup
 * @Author momoko
 * @Date 2018/07
 */

<template>
  <div :class="c()">
    <transition :name="maskTransition">
      <div
        v-show="show"
        :class="[c('__mask'), ...maskClass]"
        :style="maskStyle"
        @click="maskClick"
        @touchmove="preventDefault($event, 'Mask')" />
    </transition>

    <transition :name="popupTransition || (popupPosition === 'center'? 'slim-scale-center': `slim-slide-${popupPosition}`)">
      <div
        v-show="show"
        ref="popup"
        :class="[c('__popup'), c(`__popup--${popupPosition}`), ...popupClass]"
        :style="popupStyle"
        @click.self="popupClick"
        @touchmove="preventDefault($event, 'Popup')">
        <slot v-if="popupBodyRenderState" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import mixin from './mixins'

/**
 * 阻止滚动穿透
 * @param {Boolean} isPrevent 是否阻止
 */
const preventRollingThrough = (() => {
  let scrollTop
  return (isPrevent = true) => {
    if (isPrevent) {
      scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      // position fixed会使滚动位置丢失，所以利用top定位
      document.body.style.position = 'fixed'
      document.body.style.left = 0
      document.body.style.right = 0
      document.body.margin = 'auto'
      document.body.style.top = `-${scrollTop}px`
    } else {
      // 恢复时，需要还原之前的滚动位置
      document.body.style.position = 'static'
      document.body.style.top = '0px'
      window.scrollTo(0, scrollTop)
    }
  }
})()

@Component
export default class SlimPopup extends Vue {
  @Prop({ default: false }) private show!: boolean // .sync 是否显示
  @Prop({ default: false }) private hideOnMaskClick!: boolean // 点击遮罩是否关闭弹窗
  @Prop({ default: false }) private forceRenderOnShow!: boolean // 显示的时候是否重新渲染
  @Prop({ default: true }) private preventMaskTouchmove!: boolean // 阻止遮罩 touchmove 事件，阻止移动端滚动穿透
  @Prop({ default: true }) private preventPopupTouchmove!: boolean // 阻止弹窗 touchmove 事件，阻止移动端滚动穿透（同时会导致弹窗区域无法滚动）
  @Prop({ default: false }) private preventBodyScroll!: boolean // 阻止 body 滚动，以间接的阻止滚动穿透（不会影响弹窗区域滚动）。开启此选项，关闭 preventPopupTouchmove，可达到弹窗区域可滚动，同时阻止滚动穿透的效果
  @Prop({ default: 'slim-fade' }) private maskTransition!: string // 遮罩动画
  @Prop({ default: null }) private popupTransition!: string // 弹窗动画，内置 'slim-scale-center', 'slim-zoom-center', 'slim-slide-top', 'slim-slide-bottom', 'slim-slide-left', 'slim-slide-right'。为空则根据 popupPosition 选用默认动画
  @Prop({ default: 'center' }) private popupPosition!: string // 弹窗位置，可选 'center', 'top', 'bottom', 'left', 'right'
  @Prop({ default: null }) private maskClass!: string[] // 遮罩的样式类
  @Prop({ default: null }) private popupClass!: string[] // 弹窗的样式类
  @Prop({ default: null }) private maskStyle!: Record<string, any> // 遮罩样式
  @Prop({ default: null }) private popupStyle!: Record<string, any> // 弹窗样式

  popupBodyRenderState: boolean = true // 弹窗内容渲染状态

  @Watch('show')
  async onShowChanged (val) {
    // forceRenderOnShow
    if (this.forceRenderOnShow && val) {
      this.popupBodyRenderState = false
      await this.$nextTick()
      this.popupBodyRenderState = true
    }

    // preventBodyScroll
    if (this.preventBodyScroll) val ? preventRollingThrough(true) : preventRollingThrough(false)
  }
}
</script>

<style lang="stylus">
@import './stylus/index.styl'

$ = vue-slim-popup
.{$} {
  &__mask {
    position fixed
    z-index 999
    top 0
    bottom 0
    left 0
    right 0
    background rgba(0, 0, 0, 0.6)
    touch-action none
    backdrop-filter blur(5px)
  }

  &__popup {
    position fixed
    z-index 1000
    margin auto

    &--center {
      top 50%
      right auto
      bottom auto
      left 50%
      transform translate3d(-50%, -50%, 0)
      transform-origin left top
    }

    &--top {
      top 0
      bottom auto
      left 50%
      right auto
      transform translate3d(-50%, 0, 0)
    }

    &--bottom {
      top auto
      bottom 0
      left 50%
      right auto
      transform translate3d(-50%, 0, 0)
    }

    &--left {
      top 50%
      bottom auto
      left 0
      right auto
      transform translate3d(0, -50%, 0)
    }

    &--right {
      top 50%
      bottom auto
      left auto
      right 0
      transform translate3d(0, -50%, 0)
    }
  }
}
</style>
