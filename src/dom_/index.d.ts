import type { selector_T } from '../_types'
/**
 * The first matching HTMLElement from the selector
 * @param {string} selector - the DOM query selector
 * @param {HTMLElement=} parent
 * @returns {HTMLElement} the first HTMLElement matching the selector
 */
export declare function dom_<Out extends HTMLElement = HTMLElement>(
	selector:selector_T, parent?:ParentNode|null
):Out|null
export { dom_ as _dom, }
