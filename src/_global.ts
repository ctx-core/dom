import { has_dom } from './has_dom'
export function _global() {
  return has_dom ? window : global
}
