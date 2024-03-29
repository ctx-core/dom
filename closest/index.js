import { matches } from '../matches/index.js'

/**
 * Returns the first matching dom element in el -> ...parent
 * @param {import('../_types/index.js').selector_T}
 * @param {HTMLElement}element
 * @param {boolean}[self_check]
 * @returns {ParentNode|undefined}
 * @private
 */
export function closest(
	selector,
	element,
	self_check
) {
	let val = self_check ? element : element.parentNode
	while (val && val !== document) {
		if (matches(val, selector)) return val
		val = val.parentNode
	}
	return
}

