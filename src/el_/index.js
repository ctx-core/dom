/**
 * The first matching HTMLElement from the selector
 * @param {string}selector - the DOM query selector
 * @param {Element}[parent]
 * @returns {Element} the first HTMLElement matching the selector
 * @private
 */
export function el_(
	selector,
	parent = document
) {
	return parent.querySelector(selector)
}
export {
	el_ as dom_,
	el_ as _dom,
}
