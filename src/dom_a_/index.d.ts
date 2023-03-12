import type { selector_T } from '../_types'
/**
 * All matching HTMLElements from the selector
 * @param {string} selector - the DOM query selector
 * @param {HTMLElement=} parent
 * @returns {NodeList} a NodeList of the HTMLElements matching the selector
 */
export declare function dom_a_<
	E extends Element = Element
>(
	selector:selector_T,
	parent?:Node|ParentNode|null
):E[]
export {
	dom_a_ as _a1__dom,
	dom_a_ as __dom,
	dom_a_ as _node_list__dom,
	dom_a_ as _NL__dom,
}
