import { _has__dom } from './_has__dom'
export function _if__has__dom(fn) {
	return (...args) => _has__dom() && fn(...args)
}
