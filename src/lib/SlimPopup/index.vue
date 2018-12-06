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
        @touchmove="preventDefault($event, 'Mask')"/>
    </transition>

    <transition :name="popupTransition">
      <div
        v-show="show"
        ref="popup"
        :class="[c('__popup'), c(`__popup--${popupPosition}`), ...popupClass]"
        :style="popupStyle"
        @touchmove="preventDefault($event, 'Popup')">
        <slot/>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
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
      document.body.style.top = `-${scrollTop}px`
    } else {
      // 恢复时，需要还原之前的滚动位置
      document.body.style.position = 'static'
      document.body.style.top = '0px'
      window.scrollTo(0, scrollTop)
    }
  }
})()

export default {
  name: 'SlimPopup',
  components: {},
  mixins: [mixin],
  props: {
    show: {
      // .sync 是否显示
      type: Boolean,
      default: false,
    },
    hideOnMaskClick: {
      // 点击遮罩是否关闭弹窗
      type: Boolean,
      default: false,
    },
    maskTransition: {
      // 遮罩动画
      type: String,
      default: 'slim-fade',
    },
    popupTransition: {
      // 弹窗动画，内置 'slim-scale', 'slim-zoom', 'slim-fade-in-bottom', 'slim-slide-in-bottom'
      type: String,
      default: 'slim-scale',
    },
    maskClass: {
      // 遮罩的样式类
      type: Array,
      default: null,
    },
    popupClass: {
      // 弹窗的样式类
      type: Array,
      default: null,
    },
    maskStyle: {
      // 遮罩的样式
      type: Object,
      default: null,
    },
    popupStyle: {
      // 弹窗的样式
      type: Object,
      default: null,
    },
    popupPosition: {
      // 弹窗的位置，可选 'center', 'top', 'bottom'
      type: String,
      default: 'center',
    },
    preventMaskTouchmove: {
      // 阻止遮罩 touchmove 事件，阻止移动端滚动穿透
      type: Boolean,
      default: true,
    },
    preventPopupTouchmove: {
      // 阻止弹窗 touchmove 事件，阻止移动端滚动穿透（同时会导致弹窗区域无法滚动）
      type: Boolean,
      default: true,
    },
    preventBodyScroll: {
      // 阻止 body 滚动，以间接的阻止滚动穿透（不会影响弹窗区域滚动）。开启此选项，关闭 preventPopupTouchmove，可达到弹窗区域可滚动，同时阻止滚动穿透的效果
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {}
  },
  watch: {
    show (val) {
      if (this.preventBodyScroll) {
        val ? preventRollingThrough(true) : preventRollingThrough(false)
      }
    },
  },
  mounted () {
    this.init()
  },
  methods: {
    // 初始化
    init () {},

    // 隐藏
    hide () {
      this.$emit('update:show', false)
    },

    // 遮罩点击 handle
    maskClick () {
      this.hideOnMaskClick && this.hide()
    },

    // 阻止默认事件
    preventDefault (e, type) {
      if (this[`prevent${type}Touchmove`]) e.preventDefault()
    },

    // 阻止滚动穿透
    preventRollingThrough,
  },
}
</script>

<style lang="stylus">
@import './stylus/index.stylus';

$ = vue-slim-popup;
.{$} {
  &__mask {
    position: fixed;
    z-index: 999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
    touch-action: none;
    backdrop-filter: blur(5px);
  }

  &__popup {
    position: fixed;
    z-index: 1000;
    margin: auto;
    left: 0;
    right: 0;

    &--center {
      top: 0;
      bottom: 0;
    }

    &--top {
      top: 0;
    }

    &--bottom {
      bottom: 0;
    }
  }
}
</style>
