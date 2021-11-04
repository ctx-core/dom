import { matches } from './matches.js'
import type { selector_T } from './selector_T.js'
/**
 * Returns the first matching dom element in el -> ...parent
 * @returns {*|Node}
 */
export function closest(selector:selector_T, element:HTMLElement, self_check?:boolean):ParentNode|undefined {
	let val = (
		self_check
		? element
		: element.parentNode
	)
	while (val && val !== document) {
		if (matches(val, selector)) return val
		val = val.parentNode
	}
	return
}
