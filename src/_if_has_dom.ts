import { has_dom } from './has_dom'
export function _if_has_dom<Fn extends (...args:any[])=>any = (...args:any[])=>any>(fn:Fn) {
	return (...args:any[])=>has_dom && fn(...args)
}
export {
	_if_has_dom as _if__has__dom
}
