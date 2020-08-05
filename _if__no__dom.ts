import { _no__dom } from './_no__dom'
export function _if__no__dom(fn) {
	return (...args) => _no__dom() && fn(...args)
}
