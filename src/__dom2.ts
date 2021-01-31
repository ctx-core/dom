import { __dom } from './_dom_a1'
/**
 * All matching HTMLElements from the selector.
 *
 * - If selector is an object, return selector.
 * @param {string|*} selector - the DOM query selector
 * @param {HTMLElement=} parent
 * @returns {NodeList} a NodeList of the HTMLElements matching the selector
 */
export function __dom2(selector, parent?:HTMLElement) {
	if (typeof selector === 'object') return selector
	return __dom(selector, parent)
}
