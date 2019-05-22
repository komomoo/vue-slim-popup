import SlimPopup from './SlimPopup/index.vue'

SlimPopup.install = function (Vue): void {
  Vue.component(SlimPopup.name, SlimPopup)
}

export default SlimPopup
