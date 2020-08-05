import { _has__dom } from './_has__dom'
export function _global() {
  return _has__dom() ? window : global
}
