/**
 * All matching HTMLElements from the selector
 * @param {string} selector - the DOM query selector
 * @param {HTMLElement=} parent
 * @returns {NodeList} a NodeList of the HTMLElements matching the selector
 */
export function _dom_a1(selector, parent?):NodeList {
	return (parent || document).querySelectorAll(selector)
}
export {
	_dom_a1 as _a1__dom,
	_dom_a1 as __dom,
	_dom_a1 as _node_list__dom,
	_dom_a1 as _NL__dom,
}
