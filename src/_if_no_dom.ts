import { no_dom } from './no_dom'
export function _if_no_dom<Fn extends (...args:any[])=>any = (...args:any[])=>any>(fn:Fn) {
	return (...args:any[]) => no_dom && fn(...args)
}
export {
	_if_no_dom as _if__no__dom
}
