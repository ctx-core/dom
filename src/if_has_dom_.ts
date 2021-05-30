import { has_dom } from './has_dom'
export function if_has_dom_<Fn extends (...args:any[])=>any = (...args:any[])=>any>(fn:Fn) {
	return (...args:any[])=>has_dom && fn(...args)
}
export {
	if_has_dom_ as _if_has_dom,
	if_has_dom_ as _if__has__dom,
}
