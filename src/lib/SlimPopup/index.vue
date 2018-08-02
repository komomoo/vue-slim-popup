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
        :class="[c('__mask'), maskClass]"
        @click="maskClick"
        @touchmove.prevent="preventDefault"
      />
    </transition>

    <transition :name="popupTransition">
      <div
        v-show="show"
        ref="popup"
        :class="[c('__popup'), c(`__popup--${popupPosition}`), popupClass]"
        @touchmove.prevent="preventDefault"
      >
        <slot/>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
import mixin from './mixins'

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
      // 弹窗动画，内置 'slim-scale', 'slim-zoom', 'slim-radius', 'slim-fade-in-bottom', 'slim-slide-in-bottom'
      type: String,
      default: 'slim-scale',
    },
    maskClass: {
      // 遮罩的样式类
      type: String,
      default: null,
    },
    popupClass: {
      // 弹窗的样式类
      type: String,
      default: null,
    },
    popupPosition: {
      // 弹窗的位置，可选 'center', 'top', 'bottom'
      type: String,
      default: 'center',
    },
  },
  data () {
    return {}
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
    preventDefault () {},
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
