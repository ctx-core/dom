import { matches } from './matches'
/**
 * Returns the first matching dom element in el -> ...parent
 * @param {HTMLElement} element
 * @param {string} selector
 * @param {boolean=} check__self
 * @returns {*|Node}
 */
export function closest(selector, element, check__self?:boolean) {
	let __ = check__self
					 ? element
					 : element.parentNode
	while (__ && __ !== document) {
		if (matches(__, selector)) return __
		__ = __.parentNode
	}
}
