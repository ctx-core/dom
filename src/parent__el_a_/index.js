/**
 * All matching HTMLElements from the selector
 * @param {import('../_types').selector_T}selector - the DOM query selector
 * @param {Element}[parent]
 * @returns {Element[]} a NodeList of the HTMLElements matching the selector
 * @private
 */
export function parent__el_a_(
	selector,
	parent = document
) {
	return [
		...(
			parent.matches && parent.matches(selector)
			? [parent]
			: []),
		...parent.querySelectorAll(selector)
	]
}
export {
	parent__el_a_ as parent__dom_a_,
}
