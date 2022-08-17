export const isObject = (value: any): Boolean => {
  return !!(Object.prototype.toString.call(value) === '[object Object]')
}
