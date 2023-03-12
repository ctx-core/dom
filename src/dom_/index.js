/**
 * The first matching HTMLElement from the selector
 * @param {string}selector - the DOM query selector
 * @param {Element}[parent]
 * @returns {Element} the first HTMLElement matching the selector
 * @private
 */
export function dom_(
	selector,
	parent
) {
	return (parent || document).querySelector(selector)
}
export { dom_ as _dom, }

