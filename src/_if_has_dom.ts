import { has_dom } from './has_dom'
export function _if_has_dom(fn) {
	return (...args) => has_dom && fn(...args)
}
export {
	_if_has_dom as _if__has__dom
}
