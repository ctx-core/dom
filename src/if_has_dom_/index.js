import { has_dom } from '../has_dom/index.js'
/**
 * @param {(...arg_a:any[])=>any}fn
 * @returns {(...arg_a:any[])=>any}
 * @private
 */
export function if_has_dom_(fn) {
	return (...arg_a)=>has_dom && fn(...arg_a)
}
export {
	if_has_dom_ as _if_has_dom,
	if_has_dom_ as _if__has__dom,
}
