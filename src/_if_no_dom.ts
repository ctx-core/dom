import { no_dom } from './no_dom'
export function _if_no_dom(fn) {
	return (...args) => no_dom && fn(...args)
}
export {
	_if_no_dom as _if__no__dom
}
