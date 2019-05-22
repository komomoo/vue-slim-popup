import Vue from 'vue'

declare module 'vue/types/vue' {
  interface VueConstructor {
    install(vue: typeof Vue): void
  }
}
