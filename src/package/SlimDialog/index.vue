/**
 * vue-slim-dialog
 * @Author momoko
 * @Date 2018/07
 */

<template>
  <div ref="slimDialog" :class="c()">

    <transition :name="maskTransition">
      <div
        v-show="show"
        :class="[c('__mask'), maskClass]"
        @click="maskClick"
        @touchmove.prevent="preventDefault"
      />
    </transition>

    <transition :name="dialogTransition">
      <div
        v-show="show"
        ref="dialog"
        :class="[c('__dialog'), dialogClass]"
        @touchmove.prevent="preventDefault"
      >
        <slot/>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
import Loading from './Loading'
import mixin from './mixins'

export default {
  name: 'SlimDialog',
  components: {
    Loading,
  },
  mixins: [mixin],
  props: {
    show: {
      // 是否显示
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
    dialogTransition: {
      // 弹窗动画
      type: String,
      default: 'slim-dialog',
    },
    maskClass: {
      // 遮罩类
      type: String,
      default: null,
    },
    dialogClass: {
      // 弹窗类
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
$ = vue-slim-dialog

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

  &__dialog {
    position fixed
    z-index 1000
    top 0
    bottom 0
    left 0
    right 0
    margin auto
    width 80%
    height 200px
    background #fff
    border-radius 16px
  }

  .slim-fade-enter-active, .slim-fade-leave-active {
    opacity: 1
    transition: opacity ease-in .2s
  }
  .slim-fade-enter, .slim-fade-leave-to {
    opacity: 0
  }

  .slim-dialog-enter-active {
    animation: dialogIn .4s;
  }
  .slim-dialog-leave-active {
    animation: dialogOut .2s;
  }
  @keyframes dialogIn {
    0% {
      transform: scale(1.4);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes dialogOut {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0.6);
      opacity: 0;
    }
  }
}
</style>
