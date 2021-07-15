import { no_dom } from './no_dom.js'
export function if_no_dom_<Fn extends (...args:any[])=>any = (...args:any[])=>any>(fn:Fn) {
	return (...args:any[]) => no_dom && fn(...args)
}
export {
	if_no_dom_ as _if_no_dom,
	if_no_dom_ as _if__no__dom,
}
