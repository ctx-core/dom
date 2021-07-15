import { has_dom } from './has_dom.js'
export function global_() {
  return has_dom ? window : global
}
export {
  global_ as _global,
}
