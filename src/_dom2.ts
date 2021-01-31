import { _dom } from './_dom'
/**
 * The first matching HTMLElement from the selector
 *
 * - If selector is an object, return selector.
 * @param {string,object} selector - the DOM query selector
 * @param {HTMLElement} parent
 * @returns {HTMLElement} the first HTMLElement matching the selector
 */
export function _dom2(selector, parent?:HTMLElement) {
	if (typeof selector === 'object') return selector
	return _dom(selector, parent)
}
