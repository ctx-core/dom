/**
 * All matching HTMLElements from the selector
 * @param {import('../_types').selector_T}selector - the DOM query selector
 * @param {Element}[parent]
 * @returns {Element[]} a NodeList of the HTMLElements matching the selector
 * @private
 */
export function parent__dom_a_(
	selector,
	parent = document
) {
	return [
		...(parent.matches(selector) ? [parent] : []),
		...parent.querySelectorAll(selector)
	]
}
