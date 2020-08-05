/**
 * All matching HTMLElements from the selector
 * @param {string} selector - the DOM query selector
 * @param {HTMLElement=} parent
 * @returns {NodeList} a NodeList of the HTMLElements matching the selector
 */
export function _dom_a1(selector, parent?) {
	return (parent || document).querySelectorAll(selector)
}
export const _a1__dom = _dom_a1
export const __dom = _dom_a1
export const _node_list__dom = _dom_a1
export const _NL__dom = _dom_a1
