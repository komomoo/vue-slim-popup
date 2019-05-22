import { Component, Vue } from 'vue-property-decorator'

const pre = 'vue-slim-popup'

@Component
export default class CreateClass extends Vue {
  // 生成 css class
  c (className: string): string {
    return className ? `${pre}${className}` : `${pre}`
  }
}
