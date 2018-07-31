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
        :class="[c('__popup'), popupClass]"
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
  components: {
  },
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
      // 弹窗动画，内置 'slim-scale', 'slim-zoom', 'slim-radius'
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
  },
  data () {
    return {
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    // 初始化
    init () {
    },

    // 隐藏
    hide () {
      this.$emit('update:show', false)
    },

    // 遮罩点击 handle
    maskClick () {
      this.hideOnMaskClick && this.hide()
    },

    // 阻止默认事件
    preventDefault () { },
  },
}
</script>

<style lang="stylus">
$ = vue-slim-popup

.{$} {

  &__mask {
    position fixed
    z-index 999
    top 0
    bottom 0
    left 0
    right 0
    background rgba(0,0,0,.6)
    touch-action none
    backdrop-filter: blur(5px)
  }

  &__popup {
    position fixed
    z-index 1000
    top 0
    bottom 0
    left 0
    right 0
    margin auto
    width 80%
    height 200px
    border-radius 16px
  }

  .slim-fade-enter-active, .slim-fade-leave-active {
    opacity: 1
    transition: opacity ease-in .2s
  }
  .slim-fade-enter, .slim-fade-leave-to {
    opacity: 0
  }

  .slim-scale-enter-active {
    animation: scaleIn .4s;
  }
  .slim-scale-leave-active {
    animation: scaleOut .2s;
  }
  @keyframes scaleIn {
    0% {
      transform: scale(1.4);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes scaleOut {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0.6);
      opacity: 0;
    }
  }

  .slim-zoom-enter-active {
    animation: zoomIn .4s;
  }
  .slim-zoom-leave-active {
    animation: zoomOut .2s;
  }
  @keyframes zoomIn {
    0% {
      transform: scale(0.6);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes zoomOut {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0.6);
      opacity: 0;
    }
  }

  .slim-radius-enter-active {
    animation: radiusIn .4s;
  }
  .slim-radius-leave-active {
    animation: radiusOut .2s;
  }
  @keyframes radiusIn {
    0% {
      transform: scale(0)
      border-radius 100%
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes radiusOut {
    0% {
      opacity: 1;
    }
    100% {
      transform: scale(0)
      border-radius 100%
      opacity: 0;
    }
  }
}
</style>
