import { el_ } from '../el/index.js'
/**
 * The first matching HTMLElement from the selector
 *
 * - If selector is an object, return selector.
 * @param {string|Element}selector
 * @param {ParentNode}[parent]
 * @returns {Element}
 */
export function obj_dom_(
	selector,
	parent
) {
	if (typeof selector === 'object') return selector
	return el_(selector, parent)
}
export { obj_dom_ as _dom2, }

