const pre = 'vue-slim-popup'

export default {
  methods: {
    // 生成 css class
    c (className: string) {
      return className ? `${pre}${className}` : `${pre}`
    },
  },
}
