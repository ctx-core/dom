import { matches } from './matches.js'
/**
 * Returns the first matching dom element in el -> ...parent
 * @type {import('./closest').closest}
 */
export const closest = (selector, element, self_check)=>{
	let val = self_check ? element : element.parentNode
	while (val && val !== document) {
		if (matches(val, selector)) return val
		val = val.parentNode
	}
	return
}

