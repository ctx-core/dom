/**
 * All matching HTMLElements from the selector
 * @param {import('../_types').selector_T}selector - the DOM query selector
 * @param {Node|ParentNode}[parent]
 * @returns {Element[]} a NodeList of the HTMLElements matching the selector
 * @private
 */
export function dom_a_(
	selector,
	parent
) {
	return Array.from((parent || document).querySelectorAll(selector))
}
export {
	dom_a_ as _a1__dom,
	dom_a_ as __dom,
	dom_a_ as _node_list__dom,
	dom_a_ as _NL__dom,
}
