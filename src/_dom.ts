import type { selector_T } from './selector_T'
/**
 * The first matching HTMLElement from the selector
 * @param {string} selector - the DOM query selector
 * @param {HTMLElement=} parent
 * @returns {HTMLElement} the first HTMLElement matching the selector
 */
export function _dom<Out extends HTMLElement = HTMLElement>(
	selector:selector_T,
	parent?:Node&ParentNode|null
):Out|null {
	return (parent || document).querySelector(selector)
}
