import SlimPopup from './SlimPopup.vue'

SlimPopup.install = function (Vue): void {
  Vue.component(SlimPopup.name, SlimPopup)
}

export default SlimPopup
