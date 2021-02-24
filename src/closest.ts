import { matches } from './matches'
/**
 * Returns the first matching dom element in el -> ...parent
 * @returns {*|Node}
 */
export function closest(selector:string, element:HTMLElement, self_check?:boolean) {
	let val = self_check
					 ? element
					 : element.parentNode
	while (val && val !== document) {
		if (matches(val, selector)) return val
		val = val.parentNode
	}
}
