import { no_dom } from './no_dom.js'
export function if_no_dom_(fn) {
	return (...args)=>no_dom && fn(...args)

}
export { if_no_dom_ as _if_no_dom, if_no_dom_ as _if__no__dom, }

