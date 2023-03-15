/**
 * All matching HTMLElements from the selector
 * @param {import('../_types').selector_T}selector - the DOM query selector
 * @param {Element}[parent]
 * @returns {Element[]} a NodeList of the HTMLElements matching the selector
 * @private
 */
export function el_a_(
	selector,
	parent = document
) {
	return Array.from(parent.querySelectorAll(selector))
}
export {
	el_a_ as dom_a_,
	el_a_ as _a1__dom,
	el_a_ as __dom,
	el_a_ as _node_list__dom,
	el_a_ as _NL__dom,
}
