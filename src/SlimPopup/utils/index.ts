/**
 * 一些帮助函数
 */

/**
 * setTimeout 的 promise 封装
 * @param {Number} time
 * @returns
 */
export function timeout (time: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}
